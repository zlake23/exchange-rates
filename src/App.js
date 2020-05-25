import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [selectedRegionTitle, setSelectedRegionTitle] = useState('Europe');

  function doFetch() {
    console.log('doFetch invoked');
    fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => {
            // apiData = Object.entries(data.rates);
            // apiData.sort();
            console.log(data);
            console.log(selectedRegionTitle);
            // render();
        });
}
doFetch();

  return (
    <div className="App">
      <header>
            <h1>Currency Exchange Rates</h1>
            <h2>Base Currency: 1 EURO</h2>
        </header>

        <div className="Container">
            <div className="Graph">
                <div className="Graph-select">
                    <select onChange={event => setSelectedRegionTitle(event.target.value)} id="exchange-rate-region">
                        <option>Europe</option>
                        <option>Asia</option>
                        <option>North America</option>
                        <option>South America</option>
                        <option>Africa/Oceania</option>
                    </select>
                </div>
                <div className="Graph-text" id="country-rate"></div>
                <div className="Graph-content" id="bar-chart"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
