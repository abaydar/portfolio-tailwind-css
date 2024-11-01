import React from 'react';
import { frameworks, languages, tools } from '../lib/data/skills';

const Skills: React.FC = () => {
  return (
    <div id='skills' className="p-4 text-left target:pt-20 pt-20">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <h3 className="text-lg font-bold mb-4">Languages</h3>
      <ul className="flex flex-wrap gap-4">
        {languages.map((language, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            {language}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Frameworks</h3>
      <ul className="flex flex-wrap gap-4">
        {frameworks.map((framework, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            {framework}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Tools/Misc</h3>
      <ul className="flex flex-wrap gap-4">
        {tools.map((tool, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;