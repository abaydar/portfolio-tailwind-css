import React from 'react';
import CustomLink from './customLink';
import ContactSvg from './contactSvg';
import githubIcon from '../assets/icons/githubIcon.svg';
import linkedinIcon from '../assets/icons/linkedinIcon.svg';

const ContactFooter: React.FC = () => {
  return (
    <div id="contact" className='flex p-4 md:p-0'>
        <div className="w-1/2">
          <CustomLink href="mailto:amandabaydar@gmail.com" className="text-lightBlue hover:text-customYellow">amandabaydar@gmail.com</CustomLink>
        </div>
        <div className="flex w-1/2 justify-end space-x-4">
        <ContactSvg href="https://github.com/abaydar" src={githubIcon} alt="GitHub" />
        <ContactSvg href="https://www.linkedin.com/in/amanda-baydar/" src={linkedinIcon} alt="LinkedIn" />
        </div>
    </div>
  );
};

export default ContactFooter;