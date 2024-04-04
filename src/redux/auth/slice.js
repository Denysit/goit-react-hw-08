import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
            error: null,
          
        },
        
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => 
        builder
            .addCase(register.pending, (state) => {
                state.error = null;
              })
            .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
              })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
              })
})

export const authReducer = authSlice.reducer;