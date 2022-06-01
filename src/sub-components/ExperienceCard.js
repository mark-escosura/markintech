import React from 'react';

const ExperienceCard = ({ title, link, image, description }) => {
  return (
    <>
      <div className='experience_heading'>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={image} width={200} alt='badge' />
        </a>
        <h2>{title}</h2>
      </div>
      <div className='experience_list_container'>
        <ul>
          {description.map((item) => {
            return (
              <li className='experience_list' key={item.id}>
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
