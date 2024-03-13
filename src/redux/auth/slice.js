import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const signUpBuilder = builder => {
  builder
    .addCase(register.pending, handlePending)
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(register.rejected, handleRejected);
};

const logInBuilder = builder => {
  builder
    .addCase(logIn.pending, handlePending)
    .addCase(logIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(logIn.rejected, handleRejected);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    signUpBuilder(builder);

    logInBuilder(builder);
  },
});
