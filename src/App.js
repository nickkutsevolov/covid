import React from 'react';
import Table from './components/Table';
import TotalChart from './components/TotalChart'
import TendencyChart from './components/TendencyChart';

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center">
        <div className="w-3/5 h-full bg-hero" />
        <div className="w-2/5 h-full bg-white grid p-12">
          <div className="w-full flex text-lg justify-between font-semibold">
            <span className="border-b-2 border-white cursor-pointer h-8 hover:border-black">COVID-19</span>
            <span className="border-b-2 border-white cursor-pointer h-8 hover:border-black">Total Chart</span>
            <span className="border-b-2 border-white cursor-pointer h-8 hover:border-black">Tendency Chart</span>
            <span className="border-b-2 border-white cursor-pointer h-8 hover:border-black">Table</span>
          </div>
          <div className="w-full">
            <h1 className="text-5xl">COVID-19 PANDEMIC</h1>
            <h3 className="text-4xl">Stay Home. Stay Safe.</h3>
          </div>
        </div>
      </div>
      <div className="m-16">
        <h3 className="text-4xl text-red-400 text-center">What's COVID-19</h3>
        <div className="flex justify-between">
          <p className="text-xl w-1/5 m-12">It's an illness caused by a virus that can spread from person to person.</p>
          <p className="text-xl w-1/5 m-12">You can become infected by coming into close contact with a person who has COVID-19.</p>
          <p className="text-xl w-1/5 m-12">To protect yourself avoid being exposed to the virus. Stay home as much as possible.</p>
        </div>
      </div>
      <div className="flex m-16">
        <div className="w-1/3 p-12">
          <h3 className="text-4xl text-red-400">Total Chart</h3>
          <p className="text-l">Exercitation minim ex occaecat pariatur ex sit consectetur Lorem consequat pariatur ipsum nostrud. Duis sunt cillum in dolor anim quis anim deserunt labore laborum aute ea quis. In id nisi quis labore pariatur aliqua cillum voluptate qui eiusmod fugiat est. Nisi laborum incididunt excepteur eiusmod ipsum elit.</p>
        </div>
        <TotalChart />
      </div>
      <div className="flex m-16">
        <TendencyChart />
        <div className="w-1/3 p-12">
          <h3 className="text-4xl text-red-400">Tendency Chart</h3>
          <p className="text-l">Exercitation minim ex occaecat pariatur ex sit consectetur Lorem consequat pariatur ipsum nostrud. Duis sunt cillum in dolor anim quis anim deserunt labore laborum aute ea quis. In id nisi quis labore pariatur aliqua cillum voluptate qui eiusmod fugiat est. Nisi laborum incididunt excepteur eiusmod ipsum elit.</p>
        </div>
      </div>
      <Table />
    </>
  );
}

export default App;