import React from 'react';
import profilePic from '../assets/avatar-full-body.png';

const Hero = () => {
  return (
    <div className='hero_container'>
      <div className='right_container'>
        <h1> Hi,</h1>
        <h3> I'm MarkInTech</h3>
        <h6> FrontEnd Dev in the making.</h6>
      </div>
      <div className='left_container'>
        <img className='pic' src={profilePic} alt='avatar' />
      </div>
    </div>
  );
};

export default Hero;
