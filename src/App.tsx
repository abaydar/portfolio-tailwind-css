import './App.css';
import Contact from './components/contact';
import Experience from './components/experience';
import Header from './components/header';
import Skills from './components/skills';
import { useEffect, useState } from 'react';
import Summary from './components/summary';
import AboutMe from './components/aboutMe';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isExperienceHovered, setIsExperienceHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-blue-200 rounded-full opacity-50 transition-transform duration-300 ease-out ${isExperienceHovered ? 'hidden' : ''}`}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'rgba(100, 108, 255, 0.1)',
          borderRadius: '50%',
          transform: `translate(${position.x - 30}px, ${position.y - 30}px)`,
          boxShadow: '0 0 40px 60px rgba(100, 108, 255, 0.1)',
        }}
        />
      {
        //TODO: why is header not sticky on mobile
      }
      <Header/>
      <div className="flex flex-col md:flex-row text-customIndigo h-screen max-w-[1280px] mx-auto p-2 md:p-8">
        <div className="w-full md:w-1/3 p-4 md:sticky md:top-0 md:h-screen">
          <Summary/>
        </div>
        <div className='w-full md:w-2/3 md:overflow-y-scroll p-4 text-center md:scrollbar-hide'>
          <Skills setIsExperienceHovered={setIsExperienceHovered}/>
          <Experience setIsExperienceHovered={setIsExperienceHovered}/>
          <AboutMe/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;