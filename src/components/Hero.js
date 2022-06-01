import React from 'react';
import profilePic from '../assets/avatar-full-body.png';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='box'>
        <h1>Mark Escosura</h1>
        <div className='typewriter_animation'>
          <p>
            I'm a <em>FrontEnd Developer</em>
          </p>
        </div>
      </div>
      <div className='box'>
        <img src={profilePic} alt='avatar' />
      </div>
    </section>
  );
};

export default Hero;
