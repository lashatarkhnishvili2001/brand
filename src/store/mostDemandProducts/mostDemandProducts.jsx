import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMostDemandProducts = createAsyncThunk('products/getMostDemandProducts', async () => {
    try {
        const response = await axios.get('https://digitalamazonproject.azurewebsites.net/api/product/mostdemandproducts');
        const data = response.data
        return  data
    }catch (error) {
        return error;
    }
});

const mostDemandProductsSlice = createSlice({
    name: 'mostDemandProducts',
    initialState: {
        mostDemandProducts: [],
        loading: false,
        error: null,
    },
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