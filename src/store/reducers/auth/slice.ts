import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../../types/auth';

const initialState: AuthState = {
  isAuth: false,
  isLoading: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
    updateLoading(state) {
      state.isLoading = false
    },
  }
})

export const { updateAuth, updateLoading } = authSlice.actions;

export default authSlice.reducer;

