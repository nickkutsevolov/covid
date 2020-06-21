import React from 'react';
import image from '../img/alert.png';

function Alert() {
  return (
    <div className="w-full bg-red-200">
      <div className="container mx-auto flex content-center p-4">
        <div className="w-1/2 flex flex-col self-center p-4">
          <h3>COVID-19 Alert</h3>
          <h1>Stay At Home</h1>
          <p>It’s important to understand that even when people appear not to have symptoms of coronavirus (COVID-19), they may still be carrying the virus.  Where you’re meeting people who aren’t from your household, your risk of catching coronavirus can increase depending on the situation. </p>
        </div>
        <img className="w-1/2 p-4 object-contain" alt="stay at home" src={image}/>
      </div>
    </div>
  );
}

export default Alert;