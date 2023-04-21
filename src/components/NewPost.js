import React from 'react';

const NewPost = ({ newPostData, handleChange, handleSubmit }) => {
  return (
    <form className='p-3 flex-fill'>

      <label htmlFor="title" className='form-label'><b>Title:</b></label>
      <input
        type="text"
        name='title'
        id='title'
        className='form-control'
        value={newPostData.title}
        onChange={handleChange}
      />

      <label htmlFor="body" className='form-label mt-3'><b>Body:</b></label>
      <textarea name="body"
        id="body"
        cols="30"
        rows="3"
        className='form-control'
        value={newPostData.body}
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

export default NewPost;
