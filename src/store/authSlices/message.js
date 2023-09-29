import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            return {message: action.payload};
        },
        clearMessage: (state, action) => {
            return {message: '' };
        }
    }
})

const { reducer, action} = messageSlice;

export const {setMessage, clearMessage} = action;
export default reducer;