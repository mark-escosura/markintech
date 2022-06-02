import React from 'react';
import profilePic from '../assets/avatar-full-body.png';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='box'>
        <h1>Mark Escosura</h1>
        <div className='typewriter_animation'>
          <span>
            I'm a <em>FrontEnd Developer</em>
          </span>
        </div>
      </div>
      <div className='box'>
        <img className='avatar' src={profilePic} alt='avatar' />
      </div>
    </section>
  );
};

export default Hero;
