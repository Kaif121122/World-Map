import axios from "axios"


// ACTIONS FOR FETCHING DATA THROUGH COUNTRY NAME 

export const fetchDataRequestByName = () => {
    return {
        type: "FETCH_DATA_REQUEST_BY_NAME"
    }
}
export const fetchDataSuccessByName = (posts) => {
    return {
        type: "FETCH_DATA_SUCCESS_BY_NAME",
        payLoad: posts
    }
}
export const fetchDataFailureByName = (error) => {
    return {
        type: "FETCH_DATA_FAILURE_BY_NAME",
        payLoad: error
    }
}

// ACTIONS USING LATITUDE AND LONGITUDE TO FETCH COUNTRY DATA 

export const fetchDataRequestByLatLng = () => {
    return {
        type: "FETCH_DATA_REQUEST_BY_LAT_LNG"
    }
}
export const fetchDataSuccessByLatLng = (posts) => {
    return {
        type: "FETCH_DATA_SUCCESS_BY_LAT_LNG",
        payLoad: posts
    }
}
export const fetchDataFailureByLatLng = (error) => {
    return {
        type: "FETCH_DATA_FAILURE_BY_LAT_LNG",
        payLoad: error
    }
}

// SET COORDINATES 

export const setCoordinates = (lat, lng) => {
    return {
        type: "SET_COORDINATES",
        payLoad: {
            latitude: lat,
            longitude: lng
        }
    }
}

// FETCH COUNTRY DATA USING LATITUDE ABD LONGITUDE 

export const fetchCountryDataUsingLatlng = (latitude, longitude) => {

    return async (dispatch) => {

        try {

            dispatch(fetchDataRequestByLatLng());

            // GET COUNTRY CODE USING OPENCAGE DATA 

            const apiKey = 'ddc2e56da033483f881b4cbf773aa059'
            const reverseGeocodeResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);

            const countryCode = reverseGeocodeResponse.data.results[0].components["ISO_3166-1_alpha-2"];

            console.log('Country code:', countryCode);

            //   GET COUNTRY DETAILS USING COUNTRY CODE 

            const countryDetail = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const currentCountry = countryDetail.data[0]
            dispatch(fetchDataSuccessByLatLng(currentCountry))
            console.log(currentCountry)

        } catch (error) {
            console.error('Error fetching country data:', error);
            dispatch(fetchDataFailureByLatLng(error))
        }

    }
};


// FETCH COUNTRY DATA USING COUNTRY NAME 


export const fetchCountryDataUsingName = (countryName) => {

    return async (dispatch) => {


        try {

            dispatch(fetchDataRequestByName())

            const response = await axios.get(`https://restcountries.com/v3/name/${countryName}`);

            const myData = response.data[0]
            const newCoordinate = myData.latlng;
            const newLat = newCoordinate[0];
            const newLng = newCoordinate[1]
            dispatch(fetchDataSuccessByName(myData))
            dispatch(setCoordinates(newLat, newLng))

            console.log(newLat, newLng)
        } catch (error) {
            console.error('Error fetching country data:', error);
            dispatch(fetchDataFailureByName(error))
        }
    }
};
