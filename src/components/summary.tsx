import React from 'react';
import { summaryData } from '../lib/data/summaryData';
import ContactSvgs from './contactSvgs';

const Summary: React.FC = () => {
  return (
    <div className="h-[90vh] flex flex-wrap">
     <div className="flex w-full justify-end space-x-4">
        <ContactSvgs />
      </div>

      <div className="text-center w-full md:w-1/2 md:text-left px-4">
        <h1
          className="text-3xl font-bold mb-2"
          dangerouslySetInnerHTML={{ __html: summaryData.greeting }}
        />
        <p className="mb-4">{summaryData.description}</p>
        <button 
          className="bg-customYellow text-darkBlue text-xl font-bold rounded-full px-16"
          onClick={() => window.open(`mailto:${summaryData.email}`)}
        >
          Email Me
        </button>
      </div>
    </div>
  );
};


export default Summary;