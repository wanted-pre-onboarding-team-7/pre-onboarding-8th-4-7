import { configureStore } from '@reduxjs/toolkit';
import { CommentSlice } from '../reducers/CommentReducer';

export const store = configureStore({
  reducer: CommentSlice.reducer,
});
