import { GET_COUNTRY_SUCCESS } from "../actions";

const initialState = {
  countries: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_SUCCESS:
      return { ...state, countries: action.payload };

    default:
      return state;
  }
};

export default countryReducer;
