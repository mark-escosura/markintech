import React from 'react';
import { Github } from '../components/AllSvgComponents';

const ProjectCard = ({ title, description, tags, link, code }) => {
  return (
    <div className='project_card'>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className='project_tags'>
        {tags.map((t, id) => {
          return <span key={id}>#{t} </span>;
        })}
      </div>
      <div className='project_card_footer'>
        <a className='visit_link' href={link} target='_blank' rel='noreferrer'>
          Visit
        </a>
        <div>
          <a className='git' target='_blank' href={code} rel='noreferrer'>
            <Github width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
