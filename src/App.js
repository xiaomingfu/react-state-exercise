import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoinCide from './CoinSide';
import Coin from './Coin';
import Box from './Box';
import ColorBox from './ColorBox';

function App() {
  return (
    <div className="App">
      <Coin />
      <ColorBox />
    </div>
  );
}

export default App;
