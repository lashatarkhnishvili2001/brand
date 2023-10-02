// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const addInCart = createAsyncThunk('cart/addInCart', async ({ id, token}) => {
//     try {
//         const response = await axios.post('https://digitalamazonproject.azurewebsites.net/api/cart/addincart', 
//         {
//             productId: id 
//         },
//         {headers: { 
//             Authorization: `Bearer ${token}`,
//         }},
//         );
//             console.log('added')
//         }catch (error) {
//             console.log(error);
//             return error;
//         }
// }); 

// const initialState = {
//     loading:false,
//     error:false,
// }


// const addInCartSlice = createSlice({
//     name: 'addInCart',
//     initialState,
//     reducers: {  },
//     extraReducers: {
//         [addInCart.pending]: (state) => {
//             state.loading = true;
//         },
//         [addInCart.fulfilled]: (state) => {
//             state.loading = false
//         },
//         [addInCart.rejected]: (state, action) => {
//             state.loading = false
//             state.error = action.payload.error
//         }
//     }
// })


// export default addInCartSlice.reducer