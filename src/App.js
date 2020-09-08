import React from 'react';
import Table from './components/Table';
import TotalChart from './components/TotalChart'
import TendencyChart from './components/TendencyChart';

function App() {
  return (
    <>
      <div className="w-full h-screen bg-hero flex flex-row items-center">
        <div className="w-1/2 flex flex-column text-2xl">
          <div className="w-48 cursor-pointer">What's COVID-19</div>
          <div className="w-48 cursor-pointer">Total Chart</div>
          <div className="w-48 cursor-pointer">Tendency Chart</div>
          <div className="w-48 cursor-pointer">Table</div>
        </div>
        <div className="w-1/2 font-normal text-right mr-16">
          <h1 className="text-5xl">COVID-19 PANDEMIC</h1>
          <h3 className="text-4xl">Stay Home. Stay Safe.</h3>
        </div>
      </div>
      <div className="w-1/2 m-auto my-16">
        <h3 className="text-4xl text-center text-red-400">What's COVID-19</h3>
        <p className="text-l my-2">Coronavirus (COVID-19) is an illness caused by a virus that can spread from person to person. The virus that causes COVID-19 is a new coronavirus that has spread throughout the world. COVID-19 symptoms can range from mild (or no symptoms) to severe illness.</p>
        <p className="text-l my-2">You can become infected by coming into close contact (about 6 feet or two arm lengths) with a person who has COVID-19. COVID-19 is primarily spread from person to person. You can become infected from respiratory droplets when an infected person coughs, sneezes, or talks. You may also be able to get it by touching a surface or object that has the virus on it, and then by touching your mouth, nose, or eyes.</p>
        <p className="text-l my-2">There is currently no vaccine to protect against COVID-19. The best way to protect yourself is to avoid being exposed to the virus that causes COVID-19. Stay home as much as possible and avoid close contact with others. Wear a mask that covers your nose and mouth in public settings. Clean and disinfect frequently touched surfaces. Wash your hands often with soap and water for at least 20 seconds, or use an alcoholbased hand sanitizer that contains at least 60% alcohol.</p>
        <p className="text-l my-2">Buy groceries and medicine, go to the doctor, and complete banking activities online when possible. If you must go in person, stay at least 6 feet away from others and disinfect items you must touch. Get deliveries and takeout, and limit in-person contact as much as possible.</p>
        <p className="text-l my-2">Stay home if you are sick, except to get medical care.  Avoid public transportation, ride-sharing, or taxis. Separate yourself from other people and pets in your home. There is no specific treatment for COVID-19, but you can seek medical care to help relieve your symptoms. If you need medical attention, call ahead.</p>
        <p className="text-l my-2">Everyone is at risk of getting COVID-19. Older adults and people of any age who have serious underlying medical conditions may be at higher risk for more severe illness.</p>
      </div>
      <div className="flex m-16">
        <div className="w-1/3 p-12">
          <h3 className="text-4xl text-center text-red-400">Total Chart</h3>
          <p className="text-l">Exercitation minim ex occaecat pariatur ex sit consectetur Lorem consequat pariatur ipsum nostrud. Duis sunt cillum in dolor anim quis anim deserunt labore laborum aute ea quis. In id nisi quis labore pariatur aliqua cillum voluptate qui eiusmod fugiat est. Nisi laborum incididunt excepteur eiusmod ipsum elit.</p>
        </div>
        <TotalChart />
      </div>
      <div className="flex m-16">
        <TendencyChart />
        <div className="w-1/3 p-12">
          <h3 className="text-4xl text-center text-red-400">Tendency Chart</h3>
          <p className="text-l">Exercitation minim ex occaecat pariatur ex sit consectetur Lorem consequat pariatur ipsum nostrud. Duis sunt cillum in dolor anim quis anim deserunt labore laborum aute ea quis. In id nisi quis labore pariatur aliqua cillum voluptate qui eiusmod fugiat est. Nisi laborum incididunt excepteur eiusmod ipsum elit.</p>
        </div>
      </div>
      <Table />
    </>
  );
}

export default App;