import React from 'react';
import Alert from './components/Alert';
import Overview from './components/Overview';
import Symptoms from './components/Symptoms';
import Prevention from './components/Prevention';
import Table from './components/Table';

function App() {
  return (
    <>
    <Alert />
    <Overview />
    <Symptoms />
    <Prevention />
    <Table />
    </>
  );
}

export default App;