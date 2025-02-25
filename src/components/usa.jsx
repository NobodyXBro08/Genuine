import React from 'react';
import '../../src/css/usa.css';  // Importamos el archivo de estilos
import People from '../assets/images/people.jpg';  // Imagen que estará en la parte derecha

const Usa = () => {
  return (
    <div className="usa-container">
      {/* Contenedor principal que respeta el espacio para el Sidebar */}
      <div className="content-usa">

        {/* Espacio para texto descriptivo */}
        <div className="text-section-usa">
          <p>Nuestra misión en el mundo y lo que soñamos para tus hijos</p>
        </div>

        {/* Sección de imagen en la parte derecha */}
        <div className="image-section-usa">
          <img src={People} alt="Imagen people" className="usa-image" />
        </div>

      </div>
    </div>
  );
};

export default Usa;
