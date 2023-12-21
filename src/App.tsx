import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataCell } from './components/DataCell';

function App() {
  return (
    <div className="App">
      <DataCell
        label='efefe'
        value='123123'
        style='green'
      />
      <DataCell
        label='efefe'
        value='123123'
        style='violet'
      />
      <DataCell
        label='efefe'
        value='123123'
        style='blue'
      />
    
    </div>
  );
}

export default App;
