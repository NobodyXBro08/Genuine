import React from 'react';
import '../css/sideBar.css'; 
import sideBarLogo from '../assets/images/SideBarLogo.jpg';  

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <img src={sideBarLogo} alt="Logo" className="sidebar-logo" />

        <div className="sidebar-links">
          <a href="#app" className="sidebar-link">Inicio</a>
          <a href="#mision-vision" className="sidebar-link">¿Quienes Somos?</a>
          <a href="#usa" className="sidebar-link">Somos Estadounidenses</a>
          <a href="#join-us" className="sidebar-link">Únete a Genuine</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
