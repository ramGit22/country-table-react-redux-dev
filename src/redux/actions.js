export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const getCountries = () => {
  return async (dispatch) => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countryData = await response.json();
    dispatch(getAllCountries(countryData));
  };
};

export const getAllCountries = (country) => {
  return {
    type: GET_COUNTRY_SUCCESS,
    payload: country,
  };
};

//add a country to cart
export const addCountryToCart = (country) => {
  return {
    type: ADD_TO_CART,
    payload: country,
  };
};

//remove a country from cart
export const removeCountryFromCart = (country) => {
  return {
    type: REMOVE_FROM_CART,
    payload: country,
  };
};
