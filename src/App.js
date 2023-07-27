import './App.css';
import React from 'react';
import StatsTable from './Components/StatsTable';
import calculateFlavanoidsStats from './helper/calculateFlavanoidsStats';
import calculateGammaStats from './helper/calculateGammaStats';

function App() {
  const flavanoidsStats = calculateFlavanoidsStats();
  const gammaStats = calculateGammaStats();
  console.log('wineData', flavanoidsStats);
  return (
    <div className="App">
      <h2>Flavanoids Stats</h2>
      <StatsTable data={flavanoidsStats} setOff="Flavanoid" />

      <h2>Gamma Stats</h2>
      <StatsTable data={gammaStats} setOff="Gamma" />
    </div>
  );
}

export default App;
