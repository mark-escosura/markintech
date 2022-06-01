import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header id='header' className='header_container'>
      <h1>MIT</h1>
      <nav className='links_container'>
        <Link activeClass='active' smooth spy to='hero'>
          Home
        </Link>
        <Link activeClass='active' smooth spy to='experience'>
          Experience
        </Link>
        <Link activeClass='active' smooth spy to='projects'>
          Projects
        </Link>
        <Link activeClass='active' smooth spy to='contact'>
          <button className='hire_me_button'>Contact</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
