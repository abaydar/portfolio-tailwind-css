import React from 'react';
import { experienceData } from '../lib/data/experienceData';

interface ExperienceProps {
  setIsExperienceHovered: (isExperienceHovered: boolean) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setIsExperienceHovered }) => {
  return (
    <div id="experience" className="p-4 text-center target:pt-20">
      <h2 className="text-3xl text-left ml-4 font-bold mb-4">Experience</h2>
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className="experience-item"
          onMouseEnter={() => setIsExperienceHovered(true)}
          onMouseLeave={() => setIsExperienceHovered(false)}
        >
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