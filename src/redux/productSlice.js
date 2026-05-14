// Redux slice for managing cart items in global state.
// A "slice" in Redux is a piece of state + the functions that change it.

import { createSlice } from "@reduxjs/toolkit";

// This is the starting/default state when the app first loads
const initialState = {
  cart_items: [], // list of items added to cart
};

const productSlice = createSlice({
  name: "product", // name of this slice
  initialState,

  // reducers = functions that change the state
  reducers: {
    // Add a new item to the cart
    addToCart: (state, action) => {
      state.cart_items.push(action.payload);
    },

    // Remove an item from the cart by its index position
    removeFromCart: (state, action) => {
      state.cart_items = state.cart_items.filter(
        (item, index) => index !== action.payload
      );
    },

    // Empty the entire cart
    clearCart: (state) => {
      state.cart_items = [];
    },
  },
});

// Export the actions so components can use them with dispatch()
export const { addToCart, removeFromCart, clearCart } = productSlice.actions;

// Export the reducer so the store can use it
export default productSlice.reducer;
