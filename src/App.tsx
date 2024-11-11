import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import Header from './components/header';
import Skills from './components/skills';
import { useEffect, useState } from 'react';

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
  console.log(isExperienceHovered);
  
  return (
    <>
    <div
      className={`pointer-events-none fixed inset-0 z-50 bg-blue-200 rounded-full opacity-50 transition-transform duration-300 ease-out ${isExperienceHovered ? 'hidden' : ''}`}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(100, 108, 255, 0.1)',
        borderRadius: '50%',
        transform: `translate(${position.x - 30}px, ${position.y - 30}px)`,
        boxShadow: '0 0 40px 60px rgba(100, 108, 255, 0.1)',
      }}
    />
      <Header/>
      <div className="flex text-customIndigo h-screen main-content max-w-[1280px] mx-auto p-8">
        <div className="w-1/3 p-4 sticky top-0 h-screen">
          <About/>
        </div>
        <div className='w-2/3 overflow-y-scroll p-4 text-center'>
          <Skills/>
          <Experience setIsExperienceHovered={setIsExperienceHovered}/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;