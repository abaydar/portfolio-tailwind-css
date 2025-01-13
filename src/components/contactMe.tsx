import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div id="contact" className="max-w-[600px] mx-auto text-center my-12">
      <h1 className="text-3xl text-darkBlue font-bold mb-8">😸 Let's build something great together</h1>
      <p className="text-lg text-darkBlue mb-8 px-12">I thrive in Agile environments, working with cross-functional teams to bring ideas to life. If you're looking for a developer who brings technical precision, robust analytical skills, and a collaborative mindset to every project, let’s connect!</p>
      <button 
          className="bg-customYellow text-darkBlue text-xl font-bold rounded-full px-16 clickable-button"
          onClick={() => window.open('mailto:amandabaydar@gmail.com')}
      >
        Email Me
      </button>
    </div>
  );
};

export default ContactMe;