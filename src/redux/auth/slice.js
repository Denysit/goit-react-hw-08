import { createSlice } from "@reduxjs/toolkit";
import { logOut, refreshUser, register } from "./operations";
import { login } from "./operations";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
          },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
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
      .addCase(login.pending, (state) => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          error: null,
        };
        state.token = null,
        state.isLoggedIn = false
      })
    .addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
    })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
     .addCase(refreshUser.rejected, (state, action) => {
       state.error = action.payload;
    })
})

export const authReducer = authSlice.reducer;