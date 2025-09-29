// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     cart_item : []
// }


// const productSlice = createSlice({
//     name:"product", 
//     initialState:initialState,
//     reducers:{
//         setprodcut:(state,action)=>{
//             state.cart_item.push(action.payload)
//         }                    
//     }
// })








// export const {setProdcut} = productSlice.actions
// export default productSlice.reducer




// src/redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart_items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart_items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart_items = state.cart_items.filter(
        (item, index) => index !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart_items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = productSlice.actions;
export default productSlice.reducer;
