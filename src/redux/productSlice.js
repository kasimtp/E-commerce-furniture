import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart_item : []
}


const productSlice = createSlice({
    name:"product", 
    initialState:initialState,
    reducers:{
        setprodcut:(state,action)=>{
            state.cart_item.push(action.payload)
        }                    
    }
})








export const {setProdcut} = productSlice.actions
export default productSlice.reducer