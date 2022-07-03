import './App.css';
import About from './Components/About';
import Accolades from './Components/Accolades';
import Picture from './Components/Picture';
import Contact from './Components/Contact';


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

        </div>
      </div>
    </div>
  );
}

export default App;
