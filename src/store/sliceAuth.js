import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
    errorMesage: null
  },
  reducers: {
    login: (state, action) => {
      state.status = 'authenticated',
        state.uid = action.payload.uid,
        state.email = action.payload.email,
        state.photoURL = action.payload.photoURL,
        state.displayName = action.payload.displayName,
        state.errorMesage = null
    },
    logout: (state, action) => {
      state.status = 'no-authenticated',
        state.uid = null,
        state.email = null,
        state.photoURL = null,
        state.displayName = null,
        state.errorMesage = action.payload?.errorMessage
    },
    chekingCredentials: (state) => {
      state.status = 'checking'
    }

  }
});
export const { login, logout, chekingCredentials } = authSlice.actions;