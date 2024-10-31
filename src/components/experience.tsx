import React from 'react';
import { experienceData } from '../lib/data/experienceData';

const Experience: React.FC = () => {
  return (
    <div className="experience">
      {experienceData.map((experience, index) => (
        <div key={index} className="experience-item">
          <h2 className="company">{experience.company}</h2>
          <h3 className="role">{experience.role}</h3>
          <p className="location">{experience.location}</p>
          <p className="duration">{experience.duration}</p>
          <p className="description">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;