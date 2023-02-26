import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_URL } from '../../../constants/api';
import { IUser, UsersState } from '../../../types/user';

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
}

export const fetchUserAsync = createAsyncThunk(
  'usersServices/fetchUserAsync',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IUser[]>(`${API_URL}/users`)

      return response.data

    } catch (error) {
      return rejectWithValue('Failed to load users!')
    }
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
        state.isLoading = false
        state.error = ''
        state.users = action.payload
      })
      .addCase(fetchUserAsync.pending.type, (state) => {
        state.isLoading = true
      })
      .addCase(fetchUserAsync.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export default userSlice.reducer;
