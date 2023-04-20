import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
  return (
    <main style={{ flex: '1 1 auto' }} className='mt-3 ms-3'>
      {posts.length ? <Feed posts={posts} /> : 'Opps!, There is no posts to display'}
    </main>
  );
};

export default Home;
