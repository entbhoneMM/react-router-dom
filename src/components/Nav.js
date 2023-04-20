import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className='navbar
    bg-dark 
    d-flex
    flex-column
    justify-content-center
    align-items-center p-3' >

      <input type="text"
        className='form-control'
        placeholder='search items'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul className='nav d-flex mt-3' >

        <li className='nav-item' >
          <Link to='/' >Home</Link>
        </li>

        <li className='nav-item ms-3' >
          <Link to='/post' >Post</Link>
        </li>

        <li className='nav-item ms-3' >
          <Link to='/about' >About</Link>
        </li>

      </ul>

    </nav>
  );
};

export default Nav;
