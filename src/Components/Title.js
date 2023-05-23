import React from 'react';
import './Title.css';
import logo from '../images/logo.png'; // Ajusta la ruta de la imagen según tu estructura de archivos

function Title() {
  return (
    <h1 className="title">
      <img src={logo} alt="Logo del Proyecto" />
    </h1>
  );
}

export default Title;
