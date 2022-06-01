import React from 'react';
import {
  Github,
  Twitter,
  Resume,
  Linkedin,
} from '../components/AllSvgComponents';

const SocialComponents = () => {
  return (
    <div className='icons'>
      <a
        target='_blank'
        href='https://docs.google.com/document/d/18nyxxlB6CWkEaJNqlCSVFbz1Kht1Ab1nlTQg4heod8w/edit?usp=sharing'
        rel='noreferrer'
      >
        <Resume width={30} height={30} />
      </a>
      <a
        target='_blank'
        href='https://github.com/mark-escosura'
        rel='noreferrer'
      >
        <Github width={30} height={30} />
      </a>
      <a
        target='_blank'
        href='https://linkedin.com/in/markintech'
        rel='noreferrer'
      >
        <Linkedin width={30} height={30} />
      </a>
      <a
        target='_blank'
        href='https://twitter.com/ayeitsmaark'
        rel='noreferrer'
      >
        <Twitter width={30} height={30} />
      </a>
      <span className='line'></span>
    </div>
  );
};

export default SocialComponents;
