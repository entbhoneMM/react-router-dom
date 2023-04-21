import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <article className='mt-3 ms-3 flex-fill'>
      {
        post &&
        <>
          <h3>{post.title}</h3>
          <h6 className='text-muted fs-6'>{post.datetime}</h6>
          <p className='.text-warp'>{post.body}</p>
          <button
            className='btn btn-danger'
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
          <hr />
        </>
      }
      {
        !post &&
        <>
          <h1>404</h1>
          <p className='.text-warp'>
            We do not found your artcle, it may be deleted or something worng!
          </p>
          <Link to='/'>
            <button
              className='btn btn-primary'
            >
              Find out more articles!
            </button>
          </Link>
          <hr />
        </>
      }
    </article>
  );
};

export default PostPage;
