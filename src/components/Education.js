import React from 'react';
import bloomtech from '../assets/full-stack-web-development-technical-interviewing.1.png';

const Education = () => {
  return (
    <div className='education_container'>
      <div className='box'>
        <div className='header_logo'>
          <a
            href='https://www.credly.com/badges/6062629d-6412-4afc-9b92-cb211edd9069/public_url'
            target='_blank'
            rel='noreferrer'
          >
            <img src={bloomtech} width={200} alt='badge' />
          </a>
          <h2>Graduate of Bloom Institute Of Technology</h2>
        </div>
        <ul>
          <li>
            Engaged in a Computer Science & Software Engineering Academy that
            provides an immersive curriculum with a focus on computer science,
            software engineering, and web development
          </li>
          <li>
            Gained hands-on experience with cross-functional Agile teams to ship
            production ready code using React, Redux, NodeJS, Express, and
            PostgreSQL
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
