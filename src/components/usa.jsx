import React from 'react';
import '../../src/css/usa.css';  
import People from '../assets/images/people.jpg';  

const Usa = () => {
    return (
        <div className="usa-container">
            <div className="content-usa">

                <div className="text-section-usa">
                    <h2>De Estados Unidos para el mundo</h2> 
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

                <div className="image-section-usa">
                    <img src={People} alt="Imagen people" className="usa-image" />
                </div>

            </div>
        </div>
    );
};

export default Usa;