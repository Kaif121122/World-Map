import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryDataUsingName } from '../actions/actions';

const SearchCountryInput = () => {
    
    const dispatch = useDispatch();

    const error = useSelector(state=>state.fetchApi.error);

    const [inputValue, setInputValue] = useState('')

// SET COUNTRY INPUT 

    const setCountryInput = (e) => {
        let countryInput = e.target.value;
        setInputValue(countryInput);
    }

    // HANDLE CLICK TO GET COUNTRY DATA 
    
    const handleInputChange = () => {
        setInputValue('')
        dispatch(fetchCountryDataUsingName(inputValue))
    };

    return (
        <>

        <form className="search-header" action="" onSubmit={(e) => e.preventDefault()}>
           
            <input className='search-input' type="text" value={inputValue} onChange={setCountryInput} placeholder="Enter a country name" />
            <button className="btn" onClick={handleInputChange} > Search</button>

        </form>

        
         <p className={error?'error-para':'hidden'}>Country details is not found please search another country</p>
        
        </>

    )
}

export default SearchCountryInput