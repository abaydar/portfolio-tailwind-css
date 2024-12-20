import React from 'react';
import { summaryData } from '../lib/data/summaryData';
import CustomLink from './customLink';
import githubIcon from '../assets/icons/githubIcon.svg';
import linkedinIcon from '../assets/icons/linkedinIcon.svg';

const Summary: React.FC = () => {
  return (
    <div className="h-[90vh] flex flex-wrap">
     <div className="flex w-full justify-end space-x-4">
        <CustomLink href="https://github.com/abaydar" target="_blank">
          <img src={githubIcon} alt="GitHub" className="w-8 h-8"/>
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/amanda-baydar/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin" className="w-8 h-8"/>
        </CustomLink>
      </div>

      <div className="text-center w-full md:w-1/2 md:text-left px-4">
        <h1
          className="text-3xl font-bold mb-2"
          dangerouslySetInnerHTML={{ __html: summaryData.greeting }}
        />
        <p className="mb-4">{summaryData.description}</p>
        <button 
          className="bg-customYellow text-darkBlue text-xl font-bold rounded-full px-16"
          onClick={() => window.open(`mailto:${summaryData.email}`)}
        >
          Email Me
        </button>
      </div>
    </div>
  );
};


export default Summary;