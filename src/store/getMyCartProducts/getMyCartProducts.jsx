import axios from "axios";
import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import Api from "../../Api/axios.js"

export const getCartProducts = createAsyncThunk('cart/getCartProducts', async (userToken) => {
    try {
        const response = await Api.get('/cart/getmycartproducts',
        {headers: {
            Authorization: `Bearer ${userToken}`,
        }},
        );
        return response.data
    }catch (error) {
        return error;
    }
});


const initialState = {
    cartProducts: [],
    loading: false,
    error: null
}

const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {  },
    extraReducers: {
        [getCartProducts.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getCartProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.cartProducts = action.payload;
        },
        [getCartProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }
    }
})

export default cartProductsSlice.reducer