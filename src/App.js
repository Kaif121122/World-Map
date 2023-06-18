import React from 'react';
import Map from './components/Map';
import CountryInfo from './components/CountryInfo';
import SearchCountryInput from './components/SearchCountryInput';

const App = () => {
  

  return (
    <main className="main-container">

      <SearchCountryInput />
      
      <div className="map-container">
        
          <Map />

          <CountryInfo />
        </div>
      
    </main>
  );
};

export default App;
