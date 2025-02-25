import React from 'react';
import '../../src/css/misionVision.css';  // Importamos el archivo de estilos
import imagenMisionVision from '../assets/images/Teacher.jpg';  // Imagen que estará en la parte superior

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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                                <path d="M2490 4618 c-33 -17 -51 -35 -67 -68 -22 -42 -23 -55 -23 -286 l0 -241 -83 -6 c-176 -14 -416 -68 -594 -133 -54 -20 -107 -37 -117 -38 -16 -1 -31 36 -103 252 -93 276 -107 302 -184 322 -44 12 -98 2 -138 -26 -27 -19 -60 -87 -61 -124 0 -14 41 -147 90 -295 50 -148 90 -273 90 -276 0 -4 -51 -41 -113 -82 -144 -96 -228 -164 -462 -377 -291 -264 -349 -323 -388 -399 -53 -100 -71 -172 -71 -281 0 -142 41 -259 127 -365 40 -49 498 -470 607 -557 489 -395 1153 -596 1775 -538 501 47 972 236 1350 542 113 92 530 473 588 538 94 105 141 231 141 380 0 109 -18 181 -71 281 -39 76 -106 144 -393 404 -230 208 -314 277 -457 372 -62 41 -113 78 -113 81 0 3 41 129 91 280 100 301 102 323 52 383 -65 77 -172 80 -241 7 -14 -16 -53 -115 -106 -274 -71 -213 -86 -249 -102 -247 -10 1 -84 24 -164 52 -194 66 -456 120 -587 121 l-43 0 0 243 c0 232 -1 245 -22 287 -25 48 -89 90 -138 90 -14 0 -46 -10 -70 -22z m350 -924 c387 -50 771 -212 1073 -453 40 -32 182 -158 317 -280 266 -241 297 -279 307 -373 6 -65 -8 -122 -44 -175 -33 -48 -477 -454 -606 -554 -782 -607 -1904 -598 -2680 20 -40 32 -182 158 -317 280 -288 261 -305 284 -305 401 0 118 16 139 315 410 264 240 380 334 517 418 252 157 555 265 859 306 140 19 416 19 564 0z"/>
                            </svg>
                        </div>
                        <h3>Nuestra misión</h3>
                        <p>Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que trascienda las fronteras geográficas e idiomáticas</p>
                    </div>

                    <div className="vision-box">
                        {/* Ícono de Visión (SVG de eye) */}
                        <div className="icon-section">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
                            </svg>
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
