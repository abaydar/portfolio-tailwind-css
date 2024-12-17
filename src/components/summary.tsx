import React from 'react';
import { summaryData } from '../lib/data/summaryData';
import CustomLink from './customLink';
import githubIcon from '../assets/icons/githubIcon.svg';
import linkedinIcon from '../assets/icons/linkedinIcon.svg';

const Summary: React.FC = () => {
  return (
    <div className="h-[80vh] flex flex-col">
      <div className="ml-auto">
        <CustomLink href="https://github.com/abaydar" target="_blank">
          <img src={githubIcon} alt="GitHub" className="w-8 h-8 inline-block mr-4"/>
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/amanda-baydar/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin" className="w-8 h-8 inline-block"/>
        </CustomLink>
      </div>
      <div className="w-1/3 my-auto">
        <h1 className="text-3xl font-bold mb-2">{summaryData.greeting}</h1>
        <p>{summaryData.description}</p>
      </div>
    </div>
  );
};

export default Summary;