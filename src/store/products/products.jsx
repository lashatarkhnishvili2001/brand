import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const response = await axios.get('https://digitalinstitute-amazon.azurewebsites.net/api/product/products')
        const data = response.data
        return data
    }catch (error) {
        return error
    }
});

const initialState = {
    data: [],
    brands:[],
    loading:false,
    error:null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {  },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
            const brandsArr = action.payload.map((item) => (item.brand))
            state.brands = brandsArr.filter((item, index) => brandsArr.indexOf(item) === index)
        },
        [getProducts.rejected]: (state) => {
            state.loading = false;
        }
    }
});



export default productsSlice.reducer