import axios from 'axios'

export const fetchCountryPending = () => {
  return {
    type: "FETCH_COUNTRY_PENDING"
  }
}

export const fetchCountryFulfilled = country => {
  return {
    type: "FETCH_COUNTRY_FULFILLED",
    country: country
  }
}

export const fetchCountryRejected = error => {
  return {
    type: "FETCH_COUNTRY_REJECTED",
    error: error
  }
}

export const fetchCountry = (query) => {
  const url = `http://localhost:8000/api/v1/countries/?search=${query}`
  return dispatch => {
    dispatch(fetchCountryPending());
    axios.get(url)
      .then(response => {
        const country = response.data;
        dispatch(fetchCountryFulfilled(country));
      })
      .catch(err => {
        dispatch(fetchCountryRejected(err));
      })
  }
}
