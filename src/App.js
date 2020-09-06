import React from 'react';
import Table from './components/Table';
import TotalChart from './components/TotalChart'
import TendencyChart from './components/TendencyChart';

function App() {
  return (
    <>
      <div className="w-full h-screen bg-hero flex flex-row justify-end items-center">
        <div className="w-1/2 font-normal text-right mr-16">
          <h1 className="text-5xl">COVID-19 PANDEMIC</h1>
          <h3 className="text-4xl">Stay Home. Stay Safe.</h3>
        </div>
      </div>
      <div className="w-1/2 m-auto my-16">
        <h3 className="text-4xl text-center text-red-400">What's COVID and what should we do</h3>
        <p className="text-l">Exercitation minim ex occaecat pariatur ex sit consectetur Lorem consequat pariatur ipsum nostrud. Duis sunt cillum in dolor anim quis anim deserunt labore laborum aute ea quis. In id nisi quis labore pariatur aliqua cillum voluptate qui eiusmod fugiat est. Nisi laborum incididunt excepteur eiusmod ipsum elit.</p>
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