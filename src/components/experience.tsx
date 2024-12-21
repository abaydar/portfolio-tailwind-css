import React from 'react';
import { experienceData } from '../lib/data/experienceData';

const Experience: React.FC = () => {
  return (
    <div id="experience" className="p-4 text-center target:pt-20 mb-40">
      <h2 className="text-3xl text-left ml-4 font-bold mb-4">Experience</h2>
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className="experience-item"
        >
        <div className="grid grid-cols-1 md:grid-cols-2 items-start mb-8">
        <div className="md:text-left">
          <h3 className="text-lg text-customYellow md:text-2xl">{experience.company}</h3>
          <h2 className="text-customYellow md:text-xl">{experience.role}</h2>
        </div>
        <div className="md:text-right md:text-lg text-customYellow">
          <p>{experience.duration}</p>
          <p>{experience.location}</p>
        </div>
        </div>
          <ul className="list-disc pl-6 text-left">{
            experience.description.map((desc, index) => (
              <li className="pl-2 mb-2" key={index}>{desc}</li>)
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;