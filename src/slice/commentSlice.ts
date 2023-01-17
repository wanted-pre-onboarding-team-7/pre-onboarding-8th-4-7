import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getComments } from '../api/api';

export interface IComments {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}
export interface CommentsState {
  value: IComments[];
}
const INIT_STATE: CommentsState = {
  value: [],
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const commentsList = await getComments();
    return commentsList;
  },
);

export const commentSlice = createSlice({
  name: 'comments',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, { payload }: any) => {
      state.value = [...state.value, ...payload];
    });
  },
});

export default commentSlice.reducer;
