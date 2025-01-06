import React from 'react';
import { frontend, backend, languages, tools } from '../lib/data/skills';
import SkillsCarousel from './skillsCarousel';

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
    <div id='skills' className="p-4 text-left target:pt-20 md:pt-20">
      <h2 className="text-3xl text-left font-bold mb-4">Skills</h2>
      {/* <div className="w-[200vw]"> */}
        <SkillsCarousel skills={skills}/>
      {/* </div> */}
    </div>
  );
};

export default Skills;