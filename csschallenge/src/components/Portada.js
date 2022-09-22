import './Portada.css';
import React from 'react';
import Minion from './../Images/minion.png';

function Portada() {
  return (
    <div className="Portada">
      <div className="Fondo"></div>
      <img className="image1" src={Minion}/>
      <div className="frase">IETI 2022</div>
    </div>
  );
}

export default Portada;
