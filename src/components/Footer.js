import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      height: '50px',
      display: 'grid',
      placeContent: 'center'
    }}
      className='bg-secondary' >
      <h1 style={{
        fontSize: '1rem',
        color: '#fff'
      }}>footer</h1>
    </footer>
  );
};

export default Footer;
