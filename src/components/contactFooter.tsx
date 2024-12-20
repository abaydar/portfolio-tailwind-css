import React from 'react';
import CustomLink from './customLink';
import ContactSvgs from './contactSvgs';

const ContactFooter: React.FC = () => {
  return (
    <div id="contact" className='flex p-4 md:p-0'>
        <div className="w-1/2">
          <CustomLink href="mailto:amandabaydar@gmail.com" className="text-lightBlue">amandabaydar@gmail.com</CustomLink>
        </div>
        <div className="flex w-1/2 justify-end space-x-4">
          <ContactSvgs />
        </div>
    </div>
  );
};

export default ContactFooter;