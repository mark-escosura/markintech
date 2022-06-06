import React from 'react';

import ExperienceCard from '../sub-components/ExperienceCard';
import { ExperienceData } from '../data/ExperienceData';

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
