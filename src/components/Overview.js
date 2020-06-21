import React from 'react';
import image from '../img/overview.png';

function Overview() {
  return (
    <div className="container mx-auto flex content-center p-4">
      <img className="w-1/2 p-4 object-contain" alt="viral droplet" src={image}/>
      <div className="w-1/2 flex flex-col self-center p-4">
        <h3>What Is COVID-19</h3>
        <h2>Coronavirus</h2>
        <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</p>
      </div>
    </div>
  );
}

export default Overview;