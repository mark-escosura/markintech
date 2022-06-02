import React from 'react';

//components
import ExperienceCard from '../sub-components/ExperienceCard';

// data
import { ExperienceData } from '../data/ExperienceData';
// console.log(ExperienceData);
const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      {ExperienceData.map((experience) => {
        return <ExperienceCard key={experience.id} {...experience} />;
      })}
    </section>
  );
};

export default Experience;
