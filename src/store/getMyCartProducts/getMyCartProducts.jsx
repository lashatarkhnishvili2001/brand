import axios from "axios";
import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

export const getMyCartProducts = createAsyncThunk('cart/getCartProducts', async (token) => {
    try {
        const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/cart/getmycartproducts',
        {headers: {
            Authorization: `Bearer ${token}`,
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
        [getMyCartProducts.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getMyCartProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.cartProducts = action.payload;
        },
        [getMyCartProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }
    }
})

export default cartProductsSlice.reducer