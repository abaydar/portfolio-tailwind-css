import React from 'react';
import { aboutData } from '../lib/data/aboutData';

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="mb-8 p-4">
      <h2 className="text-3xl text-left font-bold mb-4">More About Me</h2>
      <div 
        className="text-left md:columns-2 py-4 md:text-xl" 
      >
        {aboutData.map((paragraph, index) => (
          <p
            className="mb-1"
            key={index}
          >
            {paragraph}
          </p>)
        )}
      </div>
    </div>
  );
};

export default AboutMe;