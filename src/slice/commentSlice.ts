import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  delComment,
  getCommentsByPage,
  postComment,
  putComment,
} from '../api/api';
import { CommentsState, IComment, IUpdateData } from '../type';
import { saveLocalStorageComment } from '../util/localStorage-Fn';

const INIT_STATE: CommentsState = {
  value: [],
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  (pageNum: number) => {
    const commentsList = getCommentsByPage(pageNum);
    return commentsList;
  },
);

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

export const updateComment = createAsyncThunk(
  'comment/updateComment',
  (updateData: IUpdateData) => {
    putComment(updateData.commentId, updateData.commentData);
    return updateData;
  },
);

export const commentSlice = createSlice({
  name: 'comments',
  initialState: INIT_STATE,
  reducers: {
    updateCommentId: (state, { payload }) => {
      const tmp = state.value.filter((ele) => ele.id === payload);
      saveLocalStorageComment(tmp[0]);
    },
  },
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
      })
      .addCase(updateComment.fulfilled, (state, { payload }: any) => {
        state.value = state.value.map((ele) => {
          if (ele.id === payload.commentId) {
            return { ...payload.commentData };
          }
          return ele;
        });
      });
  },
});
export const { updateCommentId } = commentSlice.actions;
export default commentSlice.reducer;
