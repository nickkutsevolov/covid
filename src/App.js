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
          <nav className="w-full flex text-lg justify-between font-semibold">
            <a href='#covid' className="border-b-2 border-white cursor-pointer h-8 hover:border-black">COVID-19</a>
            <a href='#totalChart' className="border-b-2 border-white cursor-pointer h-8 hover:border-black">Total Chart</a>
            <a href='#tendencyChart' className="border-b-2 border-white cursor-pointer h-8 hover:border-black">Tendency Chart</a>
            <a href='#table' className="border-b-2 border-white cursor-pointer h-8 hover:border-black">Table</a>
          </nav>
          <div className="w-full">
            <h1 className="text-5xl">COVID-19 PANDEMIC</h1>
            <h3 className="text-4xl">Stay Home. Stay Safe.</h3>
          </div>
        </div>
      </div>
      <div id='covid' className="container my-16 mx-auto py-16">
        <h3 className="text-4xl text-red-400 text-center">What's COVID-19</h3>
        <div className="flex justify-around mt-16">
          <div className="w-1/5">
            <img src={require('./img/covid19.svg')} alt='virus' className='w-40 h-40 mx-auto' />
            <p className="text-xl mt-8">It's an illness caused by a new coronavirus that can spread from person to person.</p>
          </div>
          <div className="w-1/5">
            <img src={require('./img/keepDistance.svg')} alt='keepDistance' className='w-40 h-40 mx-auto' />
            <p className="text-xl mt-8">You can become infected by coming into close contact with a person who has COVID-19.</p>
          </div>
          <div className="w-1/5">
            <img src={require('./img/stayHome.svg')} alt='stayHome' className='w-40 h-40 mx-auto' />
            <p className="text-xl mt-8">To protect yourself avoid being exposed to the virus. Stay home as much as possible.</p>
          </div>
        </div>
      </div>
      <div className="container flex my-16 mx-auto py-16">
        <div id='totalChart' className="w-1/3 p-12">
          <h3 className="text-4xl text-red-400">Total Chart</h3>
          <p className="text-l">This chart shows the total number of COVID&#8209;19 cases by day. You can select a country from the dropdown list and specify a timespan selecting one of the options. By the thickness of the gray area you can see the proportionate amount of active cases to its total. Hover the chart to see the exact numbers by day. Please note that some countries do not provide full COVID&#8209;19 statistics.</p>
        </div>
        <TotalChart />
      </div>
      <div className="container flex my-16 mx-auto py-16">
        <TendencyChart />
        <div id='tendencyChart' className="w-1/3 p-12">
          <h3 className="text-4xl text-red-400">Tendency Chart</h3>
          <p className="text-l">This chart shows the number of new COVID&#8209;19 cases by day. You can select a country from the dropdown list and specify a timespan selecting one of the options. By the height of the bars you can see the number of people infected, recovered or died. The difference between the positive bar(dead and recovered) and the negative(infected) shows whether the virus spread is slowing down or not. Hover the chart to see the exact numbers by day. Please note that some countries do not provide full COVID&#8209;19 statistics or they may publish cumulative data on certain days which results in high pikes on the chart.</p>
        </div>
      </div>
      <Table />
    </>
  );
}

export default App;