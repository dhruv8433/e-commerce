// initial stage for cart functionallity
const initialState = {
  cartItems: [],
  status: "pending",
};

// Define action types (constants)
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_TO_CART";
export const CLEAR_CART = "CLEAR_CART";

// reducer that handle which case fired
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        status: "pending",
      };
    case REMOVE_FROM_CART:
      // action.payload should contain the item to be removed from the cart
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCart,
        status: "pending",
      };
    case CLEAR_CART:
      // if order is placed than clear cart
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
