import React from 'react';
import Header from './components/Header'
import Table from './components/Table';
import Artists from './components/Artists'
import Addsongs from './components/Addsongs';
import Addartist from './components/Addartist';

function App() {
  return (
    <>
      <Header />
      <Table />
      <Artists />
      <Addsongs />
      <Addartist />
    </>
  )
}
export default App;