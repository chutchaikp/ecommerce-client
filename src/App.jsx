import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const key = import.meta.env.VITE_KEY; // process.env.VITE_KEY

  return (
    <div className="App">
      App...
      <p>{key}</p>
    </div>
  );
}

export default App;
