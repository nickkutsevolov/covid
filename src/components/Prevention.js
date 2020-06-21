import React from 'react';
import masks from '../img/prevention/masks.png';
import hands from '../img/prevention/hands.png';
import rag from '../img/prevention/rag.png';
import contact from '../img/prevention/contact.png';

function Prevention() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h3 className="mx-auto">COVID-19</h3>
      <h2 className="mx-auto">What Should We Do</h2>
      <div className="flex justify-center p-4 mx-auto">
        <div className="w-1/4 mx-4 p-4 shadow-2xl rounded-md">
          <img src={masks} alt="masks" />
          <h3 className="font-secondary text-primary my-2">Wear Masks</h3>
          <p className="my-3">Masks prevent a person who may actually have the disease from transmitting it to somebody else</p>
        </div>
        <div className="w-1/4 mx-4 p-4 shadow-2xl rounded-md">
          <img src={hands} alt="hands" />
          <h3 className="font-secondary text-primary my-2">Wash Hands</h3>
          <p className="my-3">Washing hands is one of the cheapest, easiest, and most important ways to prevent the spread of a virus</p>
        </div>
        <div className="w-1/4 mx-4 p-4 shadow-2xl rounded-md">
          <img src={rag} alt="rag" />
          <h3 className="font-secondary text-primary my-2">Use Handkerchief</h3>
          <p className="my-3">Use tissue while sneezing, thus you can block viral droplets</p>
        </div>
        <div className="w-1/4 mx-4 p-4 shadow-2xl rounded-md">
          <img src={contact} alt="contact" />
          <h3 className="font-secondary text-primary my-2">Avoid Contact</h3>
          <p className="my-3">Social distancing (maintain a distance of 6 feet between yourself and others)</p>
        </div>
      </div>
    </div>
  );
}

export default Prevention;