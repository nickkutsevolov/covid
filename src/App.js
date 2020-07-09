import React from 'react';
import Table from './components/Table';
import TotalChart from './components/TotalChart'
import TendencyChart from './components/TendencyChart';

function App() {
  return (
    <>
      <TotalChart />
      <TendencyChart />
      <Table />
    </>
  );
}

export default App;