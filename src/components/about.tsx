import React from 'react';
import { aboutData } from '../lib/data/aboutData';
import CustomLink from './customLink';
import githubMark from '../icons/githubMark.svg';
import githubMarkWhite from '../icons/githubMarkWhite.svg';
import linkedinIconWhite from '../icons/linkedinIconWhite.svg';
import linkedinIcon from '../icons/linkedinIcon.svg';

const About: React.FC = () => {
  return (
    <div id="about" className="p-6 text-customGreen dark:text-purple-300 target:pt-20">
      <h1 className="text-3xl font-bold mb-2">{aboutData.name}</h1>
      <h2 className="text-2xl">
        {aboutData.title}
      </h2>
      <h3 className="text-xl mb-4">
        {aboutData.location}
      </h3>
      <p>
      {aboutData.description}
      </p>
      <CustomLink href="https://github.com/abaydar">
        <img src={githubMarkWhite} alt="GitHub Mark White" className="hidden dark:inline-block w-8 h-8"/>
      </CustomLink>
      <CustomLink href="https://github.com/abaydar">
        <img src={githubMark} alt="GitHub Mark" className="dark:hidden w-8 h-8 inline-block"/>
      </CustomLink>
      <CustomLink href="https://www.linkedin.com/in/amanda-baydar/">
        <img src={linkedinIcon} alt="Linkedin" className="dark:hidden w-8 h-8 inline-block"/>
      </CustomLink>
      <CustomLink href="https://www.linkedin.com/in/amanda-baydar/">
        <img src={linkedinIconWhite} alt="Linkedin White" className="hidden dark:inline-block w-8 h-8"/>
      </CustomLink>
    </div>
  );
};

export default About;