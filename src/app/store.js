// Redux Store - the central place where all global state is stored.
// Any component in the app can read from or write to this store.

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productSlice";

const store = configureStore({
  reducer: {
    // "product" is the key used to access this slice in useSelector
    // e.g. useSelector(state => state.product.cart_items)
    product: productReducer,
  },
});

export default store;