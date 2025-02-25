import React from 'react';
import '../src/css/app.css';  // Estilos principales
import SideBar from '../src/components/sideBar.jsx';  // Importamos el SideBar
import MisionVision from '../src/components/misionVision.jsx';
import Fondo from '../src/assets/images/Fondo.jpg';  // Importamos la imagen de fondo

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="image-container">
          <img src={Fondo} alt="Fondo" className="background-image" />
        </div>
        <SideBar />
      </div>
      <MisionVision />
    </div>
  );
}

export default App;
