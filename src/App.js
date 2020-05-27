import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [selectedRegionTitle, setSelectedRegionTitle] = useState('Europe');
  const [selectedRegion, setSelectedRegion] = useState({
    'Europe': ['BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB'],
    'Asia': ['CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MYR', 'PHP', 'SGD', 'THB', 'TRY'],
    'North America': ['USD', 'CAD', 'MXN'],
    'South America': ['BRL'],
    'Africa/Oceania': ['ZAR', 'AUD', 'NZD'],
  });
  let [rates, setRates] = useState([])

  function doFetch() {
    fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => {
          setRates(Object.entries(data.rates));
        });
  }

  // function updateRegionAndTitle() {
  //   setSelectedRegionTitle();
  //   setSelectedRegion(selectedRegionTitle);

  // }

useEffect(doFetch, [selectedRegionTitle]);

  return (
    <div className="App">
      <header>
            <h1>Currency Exchange Rates</h1>
            <h2>Base Currency: 1 EURO</h2>
        </header>

        <div className="Container">
            <div className="Graph">
                <div className="Graph-select">
                    <select onChange={event => setSelectedRegionTitle(event.target.value)}>
                        <option>Europe</option>
                        <option>Asia</option>
                        <option>North America</option>
                        <option>South America</option>
                        <option>Africa/Oceania</option>
                    </select>
                </div>
                <div className="Graph-text">
                  {
                    rates
                    .filter(rate => selectedRegion[selectedRegionTitle].includes(rate[0]))
                    .map(rate => (
                    <div className="Graph-text" key={rate[0]} style={{width: (1/rate[1] * 100) + '%'}}>
                      {rate[0]}, {rate[1]}
                    </div>
                     
                    ))
                  }
                </div>
                <div className="Graph-content">
                  {
                    rates
                    .filter(rate => selectedRegion[selectedRegionTitle].includes(rate[0]))
                    .map(rate => (
                    <div className="Graph-bar" key={rate[0]} style={{width: (1/rate[1] * 100) + '%'}}>
                      
                    </div>
                     
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
