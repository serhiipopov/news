import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../../../types/post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
  limit: 50,
  allFetched: false,
}

export const fetchPostsAsync = createAsyncThunk(
  'postsServices/fetchPostsAsync',
  async (limit: number, { rejectWithValue }) => {
    try {
      const response = await axios.get<Post[]>(`${URL}`, {
        params: {
          _limit: limit
        }
      })

      return response.data

    } catch (error) {
      return rejectWithValue('Failed to load news!')
    }
  }
)

export const deletePostAsync = createAsyncThunk(
  'postsServices/deletePostAsync',
  async (postId: number, { dispatch, rejectWithValue }) => {
    try {
      const { data, status } = await axios.delete(`${URL}/${postId}`)

      if (status === 200) {
        dispatch(removePost({ postId }));

        return data;
      }

    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload.postId)
    },
    updateLimit(state, action: PayloadAction<number>) {
      state.limit += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.fulfilled.type, (state, action: PayloadAction<Post[]>) => {
        state.isLoading = false
        state.error = ''
        state.posts = action.payload
        if (action.payload.length < state.limit) {
          state.allFetched = true
        }
      })
      .addCase(fetchPostsAsync.pending.type, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPostsAsync.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      })
    builder
      .addCase(deletePostAsync.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  removePost,
  updateLimit,
} = postSlice.actions

export default postSlice.reducer;
