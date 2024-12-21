import './App.css';
import Experience from './components/experience';
import Header from './components/header';
import Skills from './components/skills';
import Summary from './components/summary';
import AboutMe from './components/aboutMe';
import ContactFooter from './components/contactFooter';

function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <Header />

      <div className="relative w-screen bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/src/assets/images/circuitRight.png')] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-50"></div>
        <div className="content-layout relative z-10">
          <Summary />
        </div>
      </div>

      <div className="w-full overflow-hidden -mt-16 md:-mt-32 xl:-mt-40 relative z-15">
        <svg viewBox="0 0 1440 150" className='w-full h-auto -mb-1'>
          <path
            d="M0,96 C288,32 576,160 864,96 C1152,32 1440,64 1440,64 L1440,160 L0,160 Z"
            className="fill-lightBlue"
          ></path>
        </svg>
        <div className="w-screen bg-lightBlue text-darkBlue">
          <div className="content-layout">
            <Skills />
          </div>
        </div>
        <div className="md:-mb-10 mb-0 bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue">
          <svg viewBox="0 0 1440 150" className='w-full h-auto'>
            <path
              d="M0,96 C288,32 576,160 864,96 C1152,32 1440,64 1440,64 L1440,160 L0,160 Z"
              className="fill-lightBlue"
              transform="scale(1, -1) translate(0, -150)"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative w-screen bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/src/assets/images/circuitLeft.png')] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-50"></div>
        <div className="content-layout">
          <Experience />
        </div>
      </div>

      <div className="w-full overflow-hidden -mt-40 relative z-15">
        <svg viewBox="0 0 1440 150" className='w-full h-auto -mb-1'>
          <path
            d="M0,96 C288,32 576,160 864,96 C1152,32 1440,64 1440,64 L1440,160 L0,160 Z"
            className="fill-lightBlue"
          ></path>
        </svg>
        <div className="w-screen bg-lightBlue text-darkBlue">
          <div className="content-layout">
            <AboutMe />
          </div>
        </div>
      </div>

      <div className="w-screen bg-gradient-to-r from-gradientDarkBlue to-gradientLightBlue">
        <div className="content-layout">
          <ContactFooter />
        </div>
      </div>
    </div>
  );
}



export default App;