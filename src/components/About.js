import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className='flex-fill mt-3 ms-3' >
      <h1>About</h1>
      <p>This is Reactjs paratice project (especially for react-router-dom) mini bloging web app project</p>
      <Link to='/'>checkout our posts!</Link>
      <hr />
    </main>
  );
};

export default About;
