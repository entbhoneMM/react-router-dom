import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
  return (
    <main className='mt-3 ms-3 flex-fill'>
      {posts.length ? <Feed posts={posts} /> : 'Opps!, There is no posts to display'}
    </main>
  );
};

export default Home;
