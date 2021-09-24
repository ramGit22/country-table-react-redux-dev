import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const storeInitialState = {
  countryReducer: {
    countries: [],
  },
  cartReducer: {
    cart: [],
  },
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  storeInitialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
