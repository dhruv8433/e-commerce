import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./isLoggedIn";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  isAuthenticate: authReducer,
  cart: cartReducer,
});

export default rootReducer;
