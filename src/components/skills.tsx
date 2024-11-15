import React from 'react';
import { frontend, backend, languages, tools } from '../lib/data/skills';
import { SvgIcon } from './svgIcon';

interface SkillsProps {
  setIsExperienceHovered: (isExperienceHovered: boolean) => void;
}

const Skills: React.FC<SkillsProps> = ({ setIsExperienceHovered }) => {
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
          <li
            key={index}
            className="relative p-4 w-40 rounded-lg transition-all duration-300 group hover:scale-105 m-auto"
            onMouseEnter={() => setIsExperienceHovered(true)}
            onMouseLeave={() => setIsExperienceHovered(false)}
          >
            <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg shadow-md group-hover:shadow-2xl transition-shadow duration-300 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <SvgIcon name={language.icon} alt={language.alt} className="w-10 h-10 mb-2"/>
              {language.name}
            </div>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl text-center font-bold mb-8">Frontend</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.frontend.map((frontend, index) => (
          <li key={index} className="relative p-4 w-40 rounded-lg transition-all duration-300 group hover:scale-105 m-auto">
            <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg shadow-md group-hover:shadow-2xl transition-shadow duration-300 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <SvgIcon name={frontend.icon} alt={frontend.alt} className="w-10 h-10 mb-2"/>
              {frontend.name}
            </div>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl text-center font-bold mb-8">Backend</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.backend.map((backend, index) => (
          <li key={index} className="relative p-4 w-40 rounded-lg transition-all duration-300 group hover:scale-105 m-auto">
            <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg shadow-md group-hover:shadow-2xl transition-shadow duration-300 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <SvgIcon name={backend.icon} alt={backend.alt} className="w-10 h-10 mb-2"/>
              {backend.name}
            </div>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl text-center font-bold mb-8">Tools/Misc</h3>
      <ul className="flex flex-wrap gap-4 mb-8">
        {skills.tools.map((tool, index) => (
          <li key={index} className="relative p-4 w-40 rounded-lg transition-all duration-300 group hover:scale-105 m-auto">
            <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg shadow-md group-hover:shadow-2xl transition-shadow duration-300 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <SvgIcon name={tool.icon} alt={tool.alt} className="w-10 h-10 mb-2"/>
              {tool.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;