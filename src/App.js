import React from 'react';
import '../src/css/app.css';  
import SideBar from '../src/components/sideBar.jsx';  
import MisionVision from '../src/components/misionVision.jsx';
import Usa from '../src/components/usa.jsx';
import JoinUs from './components/joinUs.jsx';
import Fondo from '../src/assets/images/Fondo.jpg';  

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="image-container">
          <img src={Fondo} alt="Fondo" className="background-image" />
        </div>
        <SideBar /> 
      </div>

      <div id="mision-vision">
        <MisionVision />
      </div>

      <div id="usa">
        <Usa />
      </div>

      <div id="join-us">
        <JoinUs />
      </div>
    </div>
  );
}

export default App;
