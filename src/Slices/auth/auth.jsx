import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import authService from "../../Services/auth.service";


const User = JSON.parse(localStorage.getItem("User"));

let error = null;

export const register = createAsyncThunk("auth/register",
    async ({ email, user, password}, thunkAPI ) => {
        try {
            const response = await authService.register(email, user, password);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response
        }catch (error) {
            let message
            if (!error?.response) {
                message = 'NO Server Response'
            }else if (error.response.status === 409) {
                message = 'USername Taken'
            } else {
                message = "registration failed"
            }
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
)

export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
        try {
            const data = await authService.login(email, password);
            return {User: data, email: email}
            }
        catch (err) {
            let message 
            if (!err?.response) {
                message = 'No Server Response';
            } else if (err.response?.status === 400) {
                message = "Missing Username or Password";
            } else if (err.response?.status === 401) {
                message = "Unauthorized";
            }else {
                message = "login failed";
            }
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
)

export const logout = createAsyncThunk("auth/logout", () => {
    authService.login();
});

const initialState = User ? {isLoggedIn: true, User } : {isLoggedIn: false, User: null, error};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {  },
    extraReducers: {
        [register.fulfilled]: (state) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.error = action.error.message
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.User = action.payload.User;
            state.email = action.payload.email;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.User= null;
            state.error = action.error.message
        },
        [logout.fulfilled]: (state) => {
            state.isLoading = false;
            state.User = null;
        },
    },
});

const { reducer } = authSlice;
export default reducer;