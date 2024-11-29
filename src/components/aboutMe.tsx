import React from 'react';
import { aboutData } from '../lib/data/aboutData';

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="mb-8">
      <h2 className="text-3xl text-left font-bold mb-4 dark:text-customGreen">More About Me</h2>
      <div 
        className="text-left p-4 dark:text-purple-300" 
        dangerouslySetInnerHTML={{ __html: aboutData }} 
      />
    </div>
  );
};

export default AboutMe;