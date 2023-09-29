import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({id, token}) => {
    try{
        const response = await fetch('https://digitalamazonproject.azurewebsites.net/api/cart/removefromcart/',
        {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productsId: id})
        });

        if (!response.ok) {
            throw new Error('Failed to remove item from cart');
        }
        return response.ok
    }catch (error) {
        console.error(error);
        throw error;
    }
})


const removeFromCartSlice = createSlice({
    name: 'removeFromCart',
    initialState: {
        remove:false,
        loading:false,
        error: null,
    },
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
            state.error = action.payload.error
        }
    }
})


export default removeFromCartSlice.reducer