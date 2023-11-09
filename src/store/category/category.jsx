import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import Api from "../../Api/axios.js"

export const getCategories = createAsyncThunk('products/getCategories', async () => {
    try{
        const response = await Api.get('/product/categories')
        const data = response.data
        return data
    }catch(error) {
        return error
    }
});

const initialState = {
    categories: [],
    loading: false,
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {  },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.loading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload
        },
        [getCategories.rejected]: (state, action) => {
        state.error = action.payload
    }
    }
})

export default categoriesSlice.reducer