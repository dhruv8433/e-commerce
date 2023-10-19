// authActions.js
// Import action types if you defined them in a separate file
import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducer/cartReducer";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../reducer/isLoggedIn";

// Action creator for successful login
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user, // User data received after successful login
});

// Action creator for login failure
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error, // Error message for login failure
});

// Action creator for successful logout
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

// add to cart action that recive data and store inside cart
export const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeToCart = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data,
});
