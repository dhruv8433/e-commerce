import authReducer from "../reducer/isLoggedIn";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Export the store for later use
export default store;
