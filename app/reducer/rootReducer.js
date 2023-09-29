import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./isLoggedIn";

const rootReducer = combineReducers({
  counter: counterReducer,
  isAuthenticate: authReducer,
});

export default rootReducer;
