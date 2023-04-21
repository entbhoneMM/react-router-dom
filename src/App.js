import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import NewPost from "./components/NewPost.js";
import PostPage from "./components/PostPage.js";
import About from "./components/About.js";
import Missing from "./components/Missing.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/posts.js"

function App() {
  const nevigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({ title: '', body: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/posts');
        setPosts(res.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
        } else {
          console.log(err.message);
        }
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const filteredPosts = posts?.filter(post =>
      (post.body).toLowerCase().includes(search)
      || (post.title).toLowerCase().includes(search)
    );

    setSearchResults(filteredPosts.reverse());

  }, [posts, search])


  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    } catch (err) {
      console.log(err.message);
    }
    nevigate('/');
  }

  const handleChange = (e) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, datetime, title: formData.title, body: formData.body };

    try {
      const res = await api.post('/posts', newPost);
      setPosts(prevState => {
        return [
          ...prevState,
          res.data
        ];
      });
    } catch (err) {
      console.log(err.message);
    }

    setFormData({ title: '', body: '' })

    nevigate('/');

  }

  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Routes>

        <Route path="/" element={<Home posts={searchResults} />} />

        <Route
          path="/post"
          element={
            <NewPost
              newPostData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />

        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
