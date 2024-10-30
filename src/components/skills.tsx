import React from 'react';
import { skills } from '../lib/data/skills';

const Skills: React.FC = () => {
  return (
    <div id='skills' className="p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;