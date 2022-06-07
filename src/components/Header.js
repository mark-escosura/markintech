import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header id='header'>
      <nav>
        <h1>MIT</h1>
        <div className='links_container'>
          <Link
            activeClass='active'
            smooth
            spy
            duration={1850}
            offset={-100}
            to='hero'
          >
            Home
          </Link>
          <Link activeClass='active' smooth spy duration={1850} to='experience'>
            Experience
          </Link>
          <Link activeClass='active' smooth spy duration={1850} to='projects'>
            Projects
          </Link>
          <Link smooth spy duration={1850} to='contact'>
            <button className='hire_me_button'>Hire Me</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
