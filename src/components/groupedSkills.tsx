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
    <div className="text-lightBlue p-8 bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue lg:mx-8 lg:mb-16 lg:h-[30vw] min-h-[400px] max-h-[400px] max-w-[90vw] mx-auto">
      <h3 className="text-2xl text-center font-bold mb-8">{capitalize(groupName)}</h3>
      <ul className={hasMoreThan3Skills ? 'grid grid-cols-2 gap-4' : ''}>
        {skills.map((skill, index) => (
          <li
            key={index}
            className="md:p-4 px-2 py-4 rounded-lg group"
          >
            <div className="flex items-center flex-nowrap">
              <SvgIcon name={skill.icon} alt={skill.alt} className="md:w-10 md:h-10 h-5 w-5"/>
              <span className="font-semibold my-auto pl-4 text-sm md:text-lg">{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupedSkills;