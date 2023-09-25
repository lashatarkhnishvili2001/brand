import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetails = createAsyncThunk('products/getDetails', async (id) => {
    try {
        const response = await axios.get(`https://digitalamazonproject.azurewebsites.net/api/product/products/${id}`);
        return response.data
    }catch (error) {
        return error
    }
})

const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        details:[],
        loading: true,
        error : null
    },
    extraReducers: {
        [getDetails.pending]: (state) => {
            state.details = undefined
            state.loading = true
        },
        [getDetails.fulfilled]: (state, action) => {
            state.loading = false
            state.details = action.payload
        },
        [getDetails.rejected]: (state, action) => {
            state.loading = false
            state.errors = action.errors
        }
    }
})


export default detailsSlice.reducer