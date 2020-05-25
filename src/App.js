import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
            <h1>Currency Exchange Rates</h1>
            <h2>Base Currency: 1 EURO</h2>
        </header>

        <div class="Container">
            <div class="Graph">
                <div class="Graph-select">
                    <select onchange="changeRegion()" id="exchange-rate-region">
                        <option>Europe</option>
                        <option>Asia</option>
                        <option>North America</option>
                        <option>South America</option>
                        <option>Africa/Oceania</option>
                    </select>
                </div>
                <div class="Graph-text" id="country-rate"></div>
                <div class="Graph-content" id="bar-chart"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
