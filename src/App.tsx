import './App.css';
import About from './components/about';
import Header from './components/header';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Header/>
      <div className="flex h-screen main-content max-w-[1280px] mx-auto p-8">
        <div className="w-1/4 p-4 sticky top-0 h-screen">
          <About/>
        </div>
        <div className='w-3/4 overflow-y-scroll p-4 text-center'>
          <Skills/>
        </div>
      </div>
    </>
  );
}

export default App;
