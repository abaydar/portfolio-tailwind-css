import React from 'react';
import CustomLink from './customLink';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Send me an email:</h2>
      <div className="mb-2">
        <CustomLink href="mailto:amandabaydar@gmail.com" className="text-pink-400">amandabaydar@gmail.com</CustomLink>
      </div>
    </div>
  );
};

export default Contact;