import React from 'react';
//components
import ProjectCard from '../sub-components/ProjectCard';

// data
import { ProjectData } from '../data/ProjectData';

// {/* Card (Make it dynamic ** Create a separate data sfile for all projects **) */}
const Projects = () => {
  return (
    <section id='projects'>
      {/* TODO */}
      {/* Header */}
      {/* use grid 2 x 2 */}
      {/* Each grid item has image(deploy image to the cloud), title, description, tags(#) button(Visit), button(github icon) */}
      {/* Image that when hover to, scrolls down || images of project in different dimensions */}
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
