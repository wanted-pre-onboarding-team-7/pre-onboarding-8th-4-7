import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { delComment, getComments, postComment } from '../api/api';
import { CommentsState, IComment } from '../type';

const INIT_STATE: CommentsState = {
  value: [],
};

export const fetchComments = createAsyncThunk('comments/fetchComments', () => {
  const commentsList = getComments();
  return commentsList;
});

export const addComment = createAsyncThunk(
  'comments/addComment',
  (commentData: IComment) => {
    return postComment(commentData);
  },
);
export const deleteComment = createAsyncThunk(
  'comment/deleteComment',
  (commentId: number) => {
    delComment(commentId);
    return commentId;
  },
);

export const commentSlice = createSlice({
  name: 'comments',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, { payload }: any) => {
        state.value = [...payload];
      })
      .addCase(addComment.fulfilled, (state, { payload }: any) => {
        state.value = [...state.value, payload];
      })
      .addCase(deleteComment.fulfilled, (state, { payload }: any) => {
        state.value = state.value.filter((ele) => ele.id !== payload);
      });
  },
});

export default commentSlice.reducer;
