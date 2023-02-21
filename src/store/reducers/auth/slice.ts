import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AuthState } from '../../../types/auth';

const initialState: AuthState = {
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
  }
})

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;

