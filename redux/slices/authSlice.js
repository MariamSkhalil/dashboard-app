import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    error:null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated= false;
      state.error= null; },
  }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
