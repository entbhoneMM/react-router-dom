import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from "../api/posts";

const EditPost = ({ post, setPost }) => {
  const nevigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/posts');
        const post = res.data.find(post => (post.id).toString() === id);
        setPost(post);
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
  }, [id, setPost]);

  const handleChange = (e) => {
    setPost(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/posts/${id}`, post);
      setPost({ title: '', body: '' });
      nevigate('/');
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



  return (
    <form className='p-3 flex-fill'>

      <label htmlFor="title" className='form-label'><b>Title:</b></label>
      <input
        type="text"
        name='title'
        id='title'
        className='form-control'
        value={post.title}
        onChange={handleChange}
      />

      <label htmlFor="body" className='form-label mt-3'><b>Body:</b></label>
      <textarea name="body"
        id="body"
        cols="30"
        rows="3"
        className='form-control'
        value={post.body}
        onChange={handleChange}
      ></textarea>

      <button
        className='btn btn-primary w-100 mt-3'
        onClick={handleSubmit}
      >
        Post
      </button>
    </form>
  );
};

export default EditPost;
