import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getCommentsAxios } from '../api';

export const axiosComments = createAsyncThunk(
  'comment/axiosComments',
  async () => {
    const response = await getCommentsAxios();
    return response;
  },
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
  },
  extraReducers: (builder) => {
    builder.addCase(axiosComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const {
  getCommentsApi,
  clickEditCommentBtn,
  clickEraseCommentBtn,
  clickAddCommentBtn,
} = commentSlice.actions;

export const getCommentsInStore = (state) => state.comment.comments;

export default configureStore({
  reducer: { comment: commentSlice.reducer },
});
