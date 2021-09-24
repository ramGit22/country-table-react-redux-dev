import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  cart: [],
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //remove duplicates from the array
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      //remove country from cart

      return {
        ...state,
        cart: [...state.cart.filter((item) => item !== action.payload)],
      };

    default:
      return state;
  }
};

export default cartReducer;
