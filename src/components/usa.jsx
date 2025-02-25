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
                    <h2>De Estados Unidos para el mundo</h2> {/* Título */}
                    <p className="main-text">
                        Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el <span className="bold-text">Florida Department of Education con el código 8822.</span>
                    </p>
                    <div className="button-container">
                        <p className="small-text"><strong>Conoce el nuestro aquí</strong></p>
                        <a href="https://studyatgenuine.com/registro-legal/" target="_blank" rel="noopener noreferrer">
                            <button className="register-button">Registro legal</button>
                        </a>
                    </div>

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

