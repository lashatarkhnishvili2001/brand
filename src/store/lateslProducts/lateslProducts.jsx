import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLatestProducts = createAsyncThunk('product/getLatestProducts', async () => {
    try {
        const response = await axios.get('https://amazon-digital-prod.azurewebsites.net/api/product/latestproducts')
        const data = response.data
        return data
    }catch (error) {
        return error;
    }
});

const initialState = {
    latestProducts: [],
    loading: false,
    error: null
}

const latestProductsSlice = createSlice({
    name: 'latestProducts',
    initialState,
    reducers: {  },
    extraReducers: {
        [getLatestProducts.pending]: (state) => {
            state.loading = true;
        },
        [getLatestProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.latestProducts = action.payload
        },
        [getLatestProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default latestProductsSlice.reducer