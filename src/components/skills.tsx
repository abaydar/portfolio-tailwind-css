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
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <h3 className="text-2xl text-center font-bold mb-8">Languages</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.languages.map((language, index) => (
          <li key={index} className="skills-item">
            <SvgIcon name={language.icon} alt={language.alt} className="w-10 h-10 mb-2"/>
            {language.name}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl text-center font-bold mb-8">Frontend</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.frontend.map((frontend, index) => (
          <li key={index} className="skills-item">
            <SvgIcon name={frontend.icon} alt={frontend.alt} className="w-10 h-10 mb-2"/>
            {frontend.name}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl text-center font-bold mb-8">Backend</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.backend.map((backend, index) => (
          <li key={index} className="skills-item">
            <SvgIcon name={backend.icon} alt={backend.alt} className="w-10 h-10 mb-2"/>
            {backend.name}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl text-center font-bold mb-8">Tools/Misc</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.tools.map((tool, index) => (
          <li key={index} className="skills-item">
            <SvgIcon name={tool.icon} alt={tool.alt} className="w-10 h-10 mb-2"/>
            {tool.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;