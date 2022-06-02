import React from 'react';

const ExperienceCard = ({ title, link, image, description }) => {
  return (
    <>
      <div className='experience_heading'>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={image} width={200} alt='badge' />
        </a>
        <h3>{title}</h3>
      </div>
      <div className='experience_list_container'>
        <ul>
          {description.map((item, id) => {
            return (
              <li className='experience_list' key={id}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ExperienceCard;
