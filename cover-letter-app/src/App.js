import './App.css';
import About from './Components/About';
import Accolades from './Components/Accolades';
import Picture from './Components/Picture';
import Contact from './Components/Contact';
import Name from './Components/Name';
import Work from './Components/Work';
import Education from './Components/Education';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='left'>
          <Picture />
          <About />
          <Accolades />
          <Contact />
        </div>
        <div className='right'>
          <Name />
          <Work />
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
