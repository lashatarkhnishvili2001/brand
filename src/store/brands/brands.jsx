// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// export const getBrands = createAsyncThunk('products/getBrands', async () => {
//     try {
//         const response = await axios.get('https://digitalinstitute-amazon.azurewebsites.net/api/product/products/');
//         let data = response.data 
//         return data 
//     }catch (error) {
//         return null;
//     }
// });

// const initialState = {
//     brands: [],
//     loading: false,
//     error: null
// }

// const brandsSlice = createSlice({
//     name: 'brands',
//     initialState,
//     reducers: {

//     },
//     extraReducers: {
//         [getBrands.pending] : (state) => {
//             state.loading = true;
//         },
//         [getBrands.fulfilled] : (state, action ) => {
//             state.loading = false;
//             let brandsArr = action.payload.map((item) => (item.brand))
//             state.brands = brandsArr.filter((item, index) => brandsArr.indexOf(item) === index)
//         },
//         [getBrands.rejected]: (state) => {
//             state.loading = false;
//         }
//     }
// })

// export default brandsSlice.reducer