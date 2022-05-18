import React from 'react';
import { Link } from 'react-router-dom';

// @desc logo(name), Home, Contact
const Header = () => {
  return (
    <div className='header_container'>
      <h1>Mark Escosura</h1>
      <div className='links_container'>
        <Link to='#'>Home</Link>
        <Link to='#education'>Education</Link>
        <Link to='#projects'>Projects</Link>
        <button className='hire_me_button'>Hire Me</button>
      </div>
    </div>
  );
};

export default Header;
