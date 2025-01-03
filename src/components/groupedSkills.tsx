import React from 'react';
import { SvgIcon } from './svgIcon';

interface GroupedSkillsProps {
  groupName: string;
  skills: { 
      name: string; 
      icon: string; 
      alt: string; 
    }[]; 
}

const GroupedSkills: React.FC<GroupedSkillsProps> = ({ groupName, skills }) => {
  
  const capitalize = (s: string) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const hasMoreThan3Skills = skills.length > 3;
  console.log(hasMoreThan3Skills);
  return (
    <div className="text-lightBlue p-8 bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue m-4">
      <h3 className="text-2xl text-center font-bold mb-8">{capitalize(groupName)}</h3>
      <ul className={hasMoreThan3Skills ? 'grid grid-cols-2 gap-4' : ''}>
        {skills.map((skill, index) => (
          <li
            key={index}
            className="p-4 rounded-lg group"
          >
            <div className="flex flex-wrap">
              <SvgIcon name={skill.icon} alt={skill.alt} className="w-10 h-10"/>
              <span className="font-semibold my-auto pl-4">{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupedSkills;