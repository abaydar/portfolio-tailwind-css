import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import Header from './components/header';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Header/>
      <div className="flex text-customGreen h-screen main-content max-w-[1280px] mx-auto p-8">
        <div className="w-1/3 p-4 sticky top-0 h-screen">
          <About/>
        </div>
        <div className='w-2/3 overflow-y-scroll p-4 text-center'>
          <Skills/>
          <Experience/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
