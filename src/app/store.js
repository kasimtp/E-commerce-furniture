import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/prodcutSlice"


const store = configureStore({
    reducer:{
        product:productReducer,
    },
});
export default store