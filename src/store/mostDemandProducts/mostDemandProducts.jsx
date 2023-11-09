import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import Api from "../../Api/axios.js"

export const getMostDemandProducts = createAsyncThunk('products/getMostDemandProducts', async () => {
    try {
        const response = await Api.get('/product/mostdemandproducts');
        const data = response.data
        return  data
    }catch (error) {
        return error;
    }
});

const initialState = {
    mostDemandProducts: [],
    loading: false,
    error: null,
}

const mostDemandProductsSlice = createSlice({
    name: 'mostDemandProducts',
    initialState,
    reducers: {  },
    extraReducers: {
        [getMostDemandProducts.pending]: (state) => {
            state.loading = true;
        },
        [getMostDemandProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.mostDemandProducts = action.payload
        },
        [getMostDemandProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default mostDemandProductsSlice.reducer