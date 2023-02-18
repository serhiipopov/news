import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../../../types/post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
}

export const fetchPostsAsync = createAsyncThunk(
  'postsServices/fetchPostsServices',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get<Post[]>(URL)
      return response.data
    } catch (error) {
      return rejectWithValue('Failed to load news!')
    }
  }
)

export const deletePostAsync = createAsyncThunk(
  'postsServices/deletePost',
  async (postId: number, { dispatch, rejectWithValue }) => {
    try {
      const { data, status } = await axios.delete(`${URL}/${postId}`);

      // if (status === 200) {
      //   dispatch(fetchPostsAsync());
      //   return data;
      // }

      return data

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchPostsAsync.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload
        state.isLoading = false
        state.error = ''
      },
      [fetchPostsAsync.pending.type]: (state) => {
        state.isLoading = true;
      },
      [fetchPostsAsync.rejected.type]: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    }
  }
)


export default postSlice.reducer;
