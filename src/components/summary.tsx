import React from 'react';
import { summaryData } from '../lib/data/summaryData';
import CustomLink from './customLink';
import githubIcon from '../assets/icons/githubIcon.svg';
import linkedinIcon from '../assets/icons/linkedinIcon.svg';

const Summary: React.FC = () => {
  return (
    <div className="p-6 target:pt-20">
      <h1 className="text-3xl font-bold mb-2">{summaryData.name}</h1>
      <h2 className="text-2xl">
        {summaryData.title}
      </h2>
      <h3 className="text-xl mb-4">
        {summaryData.location}
      </h3>
      <p>
      {summaryData.description}
      </p>
      <div className="mt-4">
        <CustomLink href="https://github.com/abaydar" target="_blank">
          <img src={githubIcon} alt="GitHub" className="w-8 h-8 inline-block mr-4"/>
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/amanda-baydar/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin" className="w-8 h-8 inline-block"/>
        </CustomLink>
      </div>
    </div>
  );
};

export default Summary;