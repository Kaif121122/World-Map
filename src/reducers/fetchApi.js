let initialState = {
    countryInfo: {
        name: {
            common: ''
        },
        capital: '',
        population: '',
        region: '',
        subregion: '',
        flags: {
            png: ''
        }
    },
    loading: false,
    error: null,
    coordinates: { latitude: 0, longitude: 0 }

}

const fetchApi = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_DATA_REQUEST_BY_LAT_LNG":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "FETCH_DATA_SUCCESS_BY_LAT_LNG":
            return {
                ...state,
                loading: true,
                countryInfo: action.payLoad

            };
        case "FETCH_DATA_FAILURE_BY_LAT_LNG":
            return {
                ...state,
                loading: false,
                error: action.payLoad
            };
        case "FETCH_DATA_REQUEST_BY_NAME":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "FETCH_DATA_SUCCESS_BY_NAME":


            return {
                ...state,
                loading: true,
                countryInfo: action.payLoad,


            };
        case "SET_COORDINATES":


            return {
                ...state,
                loading: true,
                coordinates: {
                    latitude: action.payLoad.latitude,
                    longitude: action.payLoad.longitude

                }


            };
        case "FETCH_DATA_FAILURE_BY_NAME":
            return {
                ...state,
                loading: false,
                error: action.payLoad
            };


        default:
            return state
    }
}
export default fetchApi;