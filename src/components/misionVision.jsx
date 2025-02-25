import React from 'react';
import '../../src/css/misionVision.css';  // Importamos el archivo de estilos
import imagenMisionVision from '../assets/images/Teacher.jpg';  // Imagen que estará en la parte superior
import rocketIcon from '../assets/icons/rocket.svg';
import eyeIcon from '../assets/icons/eye.svg';

const MisionVision = () => {
    return (
        <div className="misionvision-container">
            {/* Contenedor principal con margen para respetar el sidebar */}
            <div className="content-misionvision">

                {/* Imagen en la parte superior */}
                <div className="image-section">
                    <img src={imagenMisionVision} alt="Imagen Misión y Visión" className="misionvision-image" />
                </div>

                {/* Espacio para texto descriptivo */}
                <div className="text-section">
                    <p>Nuestra misión en el mundo y lo que soñamos para tus hijos</p>
                </div>

                {/* Cuadros de Misión y Visión */}
                <div className="misionvision-boxes">
                    <div className="mision-box">
                        {/* Ícono de Misión (SVG de rocket) */}
                        <div className="icon-section">
                            <img src={rocketIcon} alt="Misión" className="icon" />
                        </div>
                        <h3>Nuestra misión</h3>
                        <p>Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que trascienda las fronteras geográficas e idiomáticas</p>
                    </div>

                    <div className="vision-box">
                        {/* Ícono de Visión (SVG de eye) */}
                        <div className="icon-section">
                            <img src={eyeIcon} alt="Visión" className="icon" />
                        </div>
                        <h3>Nuestra Visión</h3>
                        <p>Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del emprendimiento, la tecnología y la innovación.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MisionVision;
