import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Covid} from './covid'
import {CovidTable} from './covidtable'
function App() {
  return (
    <div className="App">
      <Covid/>
      <CovidTable/>
    </div>
  );
}

export default App;
