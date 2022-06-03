import React from 'react';
//components
import ProjectCard from '../sub-components/ProjectCard';

// data
import { ProjectData } from '../data/ProjectData';

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='projects_container'>
        {ProjectData.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
