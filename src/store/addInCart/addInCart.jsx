import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addItemToCart = createAsyncThunk('cart/addInCart', async ({ id, token}) => {
    try {
        const response = await axios.post('https://amazon-digital-prod.azurewebsites.net/api/cart/addincart', 
        {
            productId: id 
        },
        {headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }},
        );
        }catch (error) {
            console.log(error);
            return error;
        }
}); 

const initialState = {
    addLoading:false,
    error:false,
}


const addItemToCartSlice = createSlice({
    name: 'addItemToCart',
    initialState,
    reducers: {  },
    extraReducers: {
        [addItemToCart.pending]: (state) => {
            state.addLoading = true;
        },
        [addItemToCart.fulfilled]: (state) => {
            state.addLoading = false
        },
        [addItemToCart.rejected]: (state, action) => {
            state.addLoading = false
            state.error = action.payload.error
        }
    }
})


export default addItemToCartSlice.reducer