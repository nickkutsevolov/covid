import React from 'react';
import image from '../img/symptoms.png';

function Symptoms() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h3 className="mx-auto">COVID-19</h3>
      <h2 className="mx-auto">Symptoms</h2>
      <img className="w-1/2 p-4 object-contain mx-auto" alt="stay at home" src={image}/>
    </div>
  );
}

export default Symptoms;