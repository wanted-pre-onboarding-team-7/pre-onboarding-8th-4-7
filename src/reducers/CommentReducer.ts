import { createSlice } from '@reduxjs/toolkit';
import { stateType } from '../type/CommentType';

const initialState: stateType = {
  comments: [],
  globalId: 23,
};

export const CommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentCreate: (state, action) => {
      state.comments.unshift({
        id: state.globalId,
        ...action.payload,
      });
      state.globalId++;
    },
    commentDelete: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload.id,
      );
    },
    commentUpdate: (state, action) => {
      state.comments = state.comments.map((comment) =>
        comment.id === action.payload.id
          ? { ...comment, ...action.payload }
          : comment,
      );
    },
  },
});

export const { commentCreate, commentDelete, commentUpdate } =
  CommentSlice.actions;
