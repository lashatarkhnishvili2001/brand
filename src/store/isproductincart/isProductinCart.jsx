// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getCartCheck = createAsyncThunk ("cartCheck/getCartCheck", async (id) => {
//     const userToken = JSON.parse(localStorage.getItem('userToken'))
//     return fetch(`https://amazon-digital-prod.azurewebsites.net/api/cart/isproductincart/${id}`,{
//             headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${userToken}`
//             }
//         })
//         .then(res => res.json())
// }) 

// const CartCheck = createSlice({
//     name:"cartCheck",
//     initialState:{
//         isInCart:undefined
//     },
//     extraReducers: {
//         [getCartCheck.pending]: (state) => {

//         },
//         [getCartCheck.fulfilled]: (state, action) => {
//             state.isInCart = action.payload
//         }
//     }
// })

// export default CartCheck.reducer