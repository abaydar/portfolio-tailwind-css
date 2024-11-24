import React from 'react';
import CustomLink from './customLink';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="p-4 rounded-lg shadow-md target:mt-20 target:mb-20 md:target:mt-40 md:target:mb-40">
      <h2 className="text-2xl font-bold mb-4 dark:text-purple-300">Send me an email:</h2>
      <div className="mb-2">
        <CustomLink href="mailto:amandabaydar@gmail.com">amandabaydar@gmail.com</CustomLink>
      </div>
    </div>
  );
};

export default Contact;