import React from 'react';
import CustomLink from './customLink';
import githubIcon from '../assets/icons/githubIcon.svg';
import linkedinIcon from '../assets/icons/linkedinIcon.svg';

const ContactSvgs: React.FC = () => {
  return (
    <>
      <CustomLink href="https://github.com/abaydar" target="_blank">
        <img src={githubIcon} alt="GitHub" className="w-8 h-8"/>
      </CustomLink>
      <CustomLink href="https://www.linkedin.com/in/amanda-baydar/" target="_blank">
        <img src={linkedinIcon} alt="Linkedin" className="w-8 h-8"/>
      </CustomLink>
    </>
  );
};

export default ContactSvgs;