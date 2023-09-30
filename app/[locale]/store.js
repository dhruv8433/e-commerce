// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

// Export the store for later use
export default store;
