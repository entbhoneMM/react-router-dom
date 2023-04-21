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

function App() {
  const nevigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My first post',
      datetime: 'April 20, 2023 10:06:30 PM',
      body: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      id: 2,
      title: 'My Second post',
      datetime: 'April 20, 2023 10:06:30 PM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis non neque ex asperiores voluptates odio ad quia voluptatibus.'
    },
    {
      id: 3,
      title: 'My Third post',
      datetime: 'April 21, 2023 12:06:30 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis non neque ex asperiores voluptates odio ad quia voluptatibus, nesciunt deserunt nisi atque eaque, optio accusantium labore dolore suscipit. Suscipit.'
    },
    {
      id: 4,
      title: 'My fourth post',
      datetime: 'April 25, 2023 1:00:03 PM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis non neque ex asperiores voluptates odio ad quia voluptatibus, nesciunt deserunt nisi atque eaque, optio accusantium labore dolore suscipit. Suscipit.'
    },
    {
      id: 5,
      title: 'My fifth post',
      datetime: 'April 20, 2023 08:16:06 PM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis non neque ex asperiores voluptates odio ad quia voluptatibus, nesciunt deserunt nisi atque eaque, optio accusantium labore dolore suscipit. Suscipit.'
    }
  ]);

  console.log(posts)

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({ title: '', body: '' });

  useEffect(() => {
    const filteredPosts = posts.filter(post =>
      (post.body).toLowerCase().includes(search)
      || (post.title).toLowerCase().includes(search)
    );

    setSearchResults(filteredPosts.reverse());

  }, [posts, search])

  const handleDelete = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, datetime, title: formData.title, body: formData.body };
    setPosts(prevState => {
      return [
        ...posts,
        newPost
      ];
    });
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
