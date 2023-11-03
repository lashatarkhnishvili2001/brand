import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getOfferedProducts = createAsyncThunk('products/getOfferedProducts', async () => {
    try {
        const response = await axios.get('https://digitalinstitute-amazon.azurewebsites.net/api/product/offers');
        const data = response.data
        return data
    }catch (error) {
        return error;
}
});

const initialState = {
    offeredProducts: [],
    loading: false,
    error: null
}

const offeredProductsSilce = createSlice({
    name: 'offeredProducts',
    initialState,
    reducers: {  },
    extraReducers: {
        [getOfferedProducts.pending]: (state) => {
        state.loading = true
        },
        [getOfferedProducts.fulfilled]: (state, action) => {
        state.loading = false
        state.offeredProducts = action.payload
        },
        [getOfferedProducts.rejected]: (state, action) => {
        state.loading = false
        state.error = action.payload
        }
    }
})

export default offeredProductsSilce.reducer