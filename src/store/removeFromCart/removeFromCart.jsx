import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({id, userToken}) => {
    try{
        const response = await fetch(`https://amazon-digital-prod.azurewebsites.net/api/cart/removefromcart`,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId: id})
        });

        if (!response.ok) {
            throw new Error('Failed to remove item from cart');
        }
        return response.ok
    }catch (error) {
        throw error;
    }
})

const initialState = {
    removed:false,
    loading:false,
    error: null,
}


const removeFromCartSlice = createSlice({
    name: 'removeFromCart',
    initialState,
    reducers: {  },
    extraReducers: {
        [removeFromCart.pending]: (state) => {
            state.loading = true;
        },
        [removeFromCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.removed = action.payload
        },
        [removeFromCart.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})


export default removeFromCartSlice.reducer