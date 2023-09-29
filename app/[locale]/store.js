import { createStore } from "redux";
import authReducer from "../reducer/isLoggedIn";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  authReducer, // Import  root reducer
  composeWithDevTools()
);

// Export the store for later use
export default store;
