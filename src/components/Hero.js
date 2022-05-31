import React from 'react';
import profilePic from '../assets/avatar-full-body.png';

const Hero = () => {
  return (
    <div className='hero_container'>
      <section className='box'>
        <h1>Mark Escosura</h1>
        <div className='typewriter_animation'>
          <h6>
            I'm a <em>FrontEnd Developer</em>
          </h6>
        </div>
      </section>
      <section className='box'>
        <img className='pic' src={profilePic} alt='avatar' />
      </section>
    </div>
  );
};

export default Hero;
