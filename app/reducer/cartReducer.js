// initial stage for cart functionallity
const initialState = {
  data: [],
  status: "pending",
};

// Define action types (constants)
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_TO_CART";

// reducer that handle which case fired
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
        status: "pending",
      };
    case REMOVE_FROM_CART:
      // action.payload should contain the item to be removed from the cart
      const updatedCart = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        cart: updatedCart,
        status: "pending",
      };
    default:
      return state;
  }
};

export default cartReducer;
