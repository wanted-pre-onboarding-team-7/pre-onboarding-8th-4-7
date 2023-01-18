import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { CommentSlice } from '../reducers/CommentReducer';

const logger = createLogger();

export const store = configureStore({
  reducer: CommentSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
