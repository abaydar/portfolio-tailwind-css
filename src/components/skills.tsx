import React from 'react';
import { frontend, backend, languages, tools } from '../lib/data/skills';
import { SvgIcon } from './svgIcon';

const Skills: React.FC = () => {
  const createSkillObject = (skill: string) => {
    const formattedSkill = skill.replace(/[ .]/g, '').toLowerCase();
    return {
      name: skill,
      icon: `${formattedSkill}Icon`,
      alt: `${skill} Icon`
    };
  };

  const skills = {
    languages: languages.map(createSkillObject),
    frontend: frontend.map(createSkillObject),
    backend: backend.map(createSkillObject),
    tools: tools.map(createSkillObject),
  };

  return (
    <div id='skills' className="p-4 text-left target:pt-20 pt-20">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <h3 className="text-lg font-bold mb-4">Languages</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.languages.map((language, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            <SvgIcon name={language.icon} alt={language.alt} className="w-10 h-10 mr-2"/>
            {language.name}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Frontend</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.frontend.map((frontend, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            <SvgIcon name={frontend.icon} alt={frontend.alt} className="w-10 h-10 mr-2"/>
            {frontend.name}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Backend</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.backend.map((backend, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            <SvgIcon name={backend.icon} alt={backend.alt} className="w-10 h-10 mr-2"/>
            {backend.name}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mb-4">Tools/Misc</h3>
      <ul className="flex flex-wrap gap-4">
        {skills.tools.map((tool, index) => (
          <li key={index} className="text-lg flex-1 min-w-[30%] p-4">
            <SvgIcon name={tool.icon} alt={tool.alt} className="w-10 h-10 mr-2"/>
            {tool.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;