import './App.css';
import Contact from './components/contact';
import Experience from './components/experience';
import Header from './components/header';
import Skills from './components/skills';
import Summary from './components/summary';
import AboutMe from './components/aboutMe';

function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <Header/>

    <div className="relative w-screen h-screen bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue">
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/src/assets/images/circuitRight.png')] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-50"/>
      <div className="content-layout relative z-10">
        <Summary />
      </div>
    </div>

    <div className="w-screen bg-lightBlue text-darkBlue">
    <div className="content-layout">
      <Skills />
    </div>
    </div>

    <div className="relative w-screen h-screen bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue">
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/src/assets/images/circuitLeft.png')] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-50"/>
      <div className="content-layout">
        <Experience />
      </div>
    </div>

    <div className="w-screen bg-lightBlue text-darkBlue">
      <div className="content-layout">
        <AboutMe/>
      </div>
    </div>

    <Contact/>
    </div>
  );
}

export default App;