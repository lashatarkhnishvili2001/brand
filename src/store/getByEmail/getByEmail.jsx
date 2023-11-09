import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api/axios.js"

export const getUserInfo = createAsyncThunk('user/getUserInfo', async (email) => {
    try {
        const response = await Api.post('/user/getByEmail',
        {
            email
        },
        {headers: {'Content-Type': 'application/json'}}
        )
        return response.data[0].userName
    }catch (error) {
        throw error
    }
});

const initialState = {
    userName: [],
    loading: false,
    error: null
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    extraReducers: {
        [getUserInfo.pending]: (state) => {
            state.loading = true
        },
        [getUserInfo.fulfilled]: (state, action) => {
            state.loading = false
            state.userName = action.payload
        },
        [getUserInfo.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default userInfoSlice.reducer