import React from 'react';
import { NavLink } from 'react-router-dom';

// @desc logo(name), Home, Contact
const Header = () => {
  return (
    <div className='header_container'>
      <h1>Mark Escosura</h1>
      <div className='links_container'>
        <NavLink to='#'>Home</NavLink>
        <NavLink to='#education'>Education</NavLink>
        <NavLink to='#projects'>Projects</NavLink>
        <NavLink to='#hireme'>
          <button className='hire_me_button'>Hire Me</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
