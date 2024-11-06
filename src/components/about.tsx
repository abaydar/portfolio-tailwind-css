import React from 'react';
import { aboutData } from '../lib/data/aboutData';
import CustomLink from './customLink';
import githubMarkWhite from '../icons/githubMarkWhite.svg';
import linkedinWhite from '../icons/linkedinWhite.svg';

const About: React.FC = () => {
  return (
    <div id="about" className="p-6 text-purple-300 target:pt-20">
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
        <img src={githubMarkWhite} alt="GitHub Mark White" className="w-8 h-8 inline-block"/>
      </CustomLink>
      <CustomLink href="https://www.linkedin.com/in/amanda-baydar/">
        <img src={linkedinWhite} alt="Linkedin White" className="w-8 h-8 inline-block"/>
      </CustomLink>
    </div>
  );
};

export default About;