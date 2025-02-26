import React from 'react';
import '../../src/css/joinUs.css';
import mapa from '../assets/images/mapa.jpg';

const JoinUs = () => {
    return (
        <div className="joinus-container">
            <div className="content-joinus">

                <div className="left-content">
                    <div className="text-section-joinus">
                        <h2><span className="first-line">Somos</span> <span className="second-line">del mundo</span></h2>
                    </div>
                    <div className="three-texts">
                        <p className="text-orange">Colombia, Ecuador, Perú, México, Pánama, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.</p>
                        <p className="text-lila">Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.</p>
                        <p className="text-purple">Colombia, Sudáfrica, Filipinas, Chile, México, Singapur</p>
                    </div>
                </div>

                <div className="right-content">
                    <div className="rectangles-container">
                        <div className="rectangle rectangle-1">+400 Estudiantes</div>
                        <div className="rectangle rectangle-2">28 Staff</div>
                        <div className="rectangle rectangle-3">44 Profesores</div>
                    </div>

                    <div className="image-section-joinus">
                        <img src={mapa} alt="Imagen" className="joinus-image" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JoinUs;
