import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCategories = createAsyncThunk('products/getCategories', async () => {
    try{
        const response = await axios.get('https://digitalamazonproject.azurewebsites.net/api/product/categories')
        const data = response.data
        console.log(data)
        return data
    }catch(error) {
        return error
    }
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
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