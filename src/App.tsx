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
      <div className="max-w-[1280px] mx-auto p-2 md:p-8">
        <Summary/>
        <Skills />
        <Experience />
        <AboutMe/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;