import React from 'react';
import { frontend, backend, languages, tools } from '../lib/data/skills';
import GroupedSkills from './groupedSkills';

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
    <div id='skills' className="p-4 text-left target:pt-20 pt-20 dark:text-purple-300">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      {Object.entries(skills).map(([skillName, skillItems]) => (
        <GroupedSkills key={skillName} groupName={skillName} skills={skillItems} setIsExperienceHovered={setIsExperienceHovered} />
      ))}
    </div>
  );
};

export default Skills;