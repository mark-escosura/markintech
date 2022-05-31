import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Github,
  Twitter,
  Resume,
  Linkedin,
} from '../components/AllSvgComponents';

const SocialComponents = () => {
  return (
    <div className='icons'>
      <NavLink target='_blank' to={{ pathname: '/' }}>
        <Resume width={30} height={30} />
      </NavLink>
      <NavLink target='_blank' to={{ pathname: '/' }}>
        <Github width={30} height={30} />
      </NavLink>
      <NavLink
        target='_blank'
        to={{ pathname: 'https://www.github.com/mark-escosura' }}
      >
        <Linkedin width={30} height={30} />
      </NavLink>
      <NavLink target='_blank' to={{ pathname: '/' }}>
        <Twitter width={30} height={30} />
      </NavLink>
      <span className='line'></span>
    </div>
  );
};

export default SocialComponents;
