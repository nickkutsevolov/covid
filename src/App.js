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
          <p className="text-xl w-1/5 m-12">It's an illness caused by a new coronavirus that can spread from person to person.</p>
          <p className="text-xl w-1/5 m-12">You can become infected by coming into close contact with a person who has COVID-19.</p>
          <p className="text-xl w-1/5 m-12">To protect yourself avoid being exposed to the virus. Stay home as much as possible.</p>
        </div>
      </div>
      <div className="flex m-16">
        <div className="w-1/3 p-12">
          <h3 className="text-4xl text-red-400">Total Chart</h3>
          <p className="text-l">This chart shows the total number of COVID&#8209;19 cases by day. You can select a country from the dropdown list and specify a timespan selecting one of the options. By the thickness of the gray area you can see the proportionate amount of active cases to its total. Hover the chart to see the exact numbers by day. Please note that some countries do not provide full COVID&#8209;19 statistics.</p>
        </div>
        <TotalChart />
      </div>
      <div className="flex m-16">
        <TendencyChart />
        <div className="w-1/3 p-12">
          <h3 className="text-4xl text-red-400">Tendency Chart</h3>
          <p className="text-l">This chart shows the number of new COVID&#8209;19 cases by day. You can select a country from the dropdown list and specify a timespan selecting one of the options. By the height of the bars you can see the number of people infected, recovered or died. The difference between the positive bar(dead and recovered) and the negative(infected) shows whether the virus spread is slowing down or not. Hover the chart to see the exact numbers by day. Please note that some countries do not provide full COVID&#8209;19 statistics or they may publish cumulative data on certain days which results in high pikes on the chart.</p>
        </div>
      </div>
      <Table />
    </>
  );
}

export default App;