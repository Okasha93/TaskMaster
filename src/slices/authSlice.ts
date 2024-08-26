"use client"

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  password: string;
}

const initialState: AuthState = {
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = authSlice.actions;
export default authSlice.reducer;
