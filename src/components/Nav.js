import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <nav
      className='navbar
      d-flex
      bg-dark 
      w-100
      p-3
      justify-content-start
      gap-1'
    >

      <input
        type="text"
        className='form-control w-50'
        placeholder='search posts'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul className='nav d-flex justify-content-center flex-grow-1' >

        <li className='nav-item p-1' >
          <Link to='/' >Home</Link>
        </li>

        <li className='nav-item p-1' >
          <Link to='/post' >Post</Link>
        </li>

        <li className='nav-item p-1' >
          <Link to='/about' >About</Link>
        </li>

      </ul>

    </nav>
  );
};

export default Nav;
