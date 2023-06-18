import React from 'react';
import { useSelector } from 'react-redux';

const CountryInfo = () => {

  const { countryInfo, loading } = useSelector(state => ({
    countryInfo: state.fetchApi.countryInfo,
    loading: state.fetchApi.loading
  }));

  console.log(countryInfo)


  if (!loading) {
    return <h1 className='loading-h1'>Loading...</h1>;
  }

  return (
    <>
      <div className='country-data'>
        <div className='image-container'>
        <img src={countryInfo.flags.png} alt="" className="country-image" />
        </div>
        <h2 className='country-name'>{countryInfo.name.common}</h2>
        <p className='common-para'>Capital: {countryInfo.capital}</p>
        <p className='common-para'>Population: {countryInfo.population}</p>
        <p className='common-para'>Region: {countryInfo.region}</p>
        <p className='common-para'>Subregion: {countryInfo.subregion}</p>
        <p className='common-para'>Area: {countryInfo.area} km²</p>

      </div>
    </>
  );
};

export default CountryInfo;
