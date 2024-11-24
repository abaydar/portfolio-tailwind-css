import React from 'react';
import { summaryData } from '../lib/data/summaryData';
import CustomLink from './customLink';
import githubMark from '../assets/icons/githubMark.svg';
import githubMarkWhite from '../assets/icons/githubMarkWhite.svg';
import linkedinIconWhite from '../assets/icons/linkedinIconWhite.svg';
import linkedinIcon from '../assets/icons/linkedinIcon.svg';

const Summary: React.FC = () => {
  return (
    <div className="p-6 dark:text-purple-300 target:pt-20">
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
        <CustomLink href="https://github.com/abaydar">
          <img src={githubMarkWhite} alt="GitHub Mark White" className="hidden dark:inline-block w-8 h-8 mr-4"/>
        </CustomLink>
        <CustomLink href="https://github.com/abaydar">
          <img src={githubMark} alt="GitHub Mark" className="dark:hidden w-8 h-8 inline-block mr-4"/>
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/amanda-baydar/">
          <img src={linkedinIcon} alt="Linkedin" className="dark:hidden w-8 h-8 inline-block"/>
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/amanda-baydar/">
          <img src={linkedinIconWhite} alt="Linkedin White" className="hidden dark:inline-block w-8 h-8"/>
        </CustomLink>
      </div>
    </div>
  );
};

export default Summary;