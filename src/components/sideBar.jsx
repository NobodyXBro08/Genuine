import React from 'react';
import '../css/sideBar.css';  // Asegúrate de que el CSS esté bien importado
import sideBarLogo from '../assets/images/SideBarLogo.jpg';  // Importa la imagen correctamente

const SideBar = () => {
  return (
    <div>
      {/* Sidebar siempre visible */}
      <div className="sidebar">
        {/* Contenedor único para todo el contenido del sidebar */}
        <div className="sidebar-content">
          {/* Logo del sidebar en la parte superior derecha */}
          <img src={sideBarLogo} alt="Logo" className="sidebar-logo" />

          {/* Opciones dentro del mismo contenedor */}
          <div className="sidebar-links">
            <a href="#" className="sidebar-link">Inicio</a>
            <a href="#" className="sidebar-link">¿Quienes Somos?</a>
            <a href="#" className="sidebar-link">Somos Estadounidenses</a>
            <a href="#" className="sidebar-link">Únete a Genuine</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
