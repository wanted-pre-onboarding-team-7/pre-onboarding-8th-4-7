import { configureStore } from '@reduxjs/toolkit';
import commentSlice from '../slice/commentSlice';

export const store = configureStore({
  reducer: {
    comments: commentSlice,
  },
  // TODO: middleware:
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
