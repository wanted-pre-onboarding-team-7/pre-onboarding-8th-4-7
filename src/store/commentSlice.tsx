import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CommentType } from '../type';
import { axiosClient } from '../api/AxiosClient';

const initialState: CommentType[] = [];

export const getComment = createAsyncThunk('getComment', async () => {
  const response = await axiosClient.get();
  return response;
});

export const createComment = createAsyncThunk(
  'postComment',
  async (comment: CommentType) => {
    const response = await axiosClient.post(comment);
    return response;
  },
);
const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => action.payload);
    builder.addCase(createComment.fulfilled, (state, action) => action.payload);
  },
});

export default commentSlice;
