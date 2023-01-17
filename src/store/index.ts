import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './commentSlice';
import editModeSlice from './editModeSlice';
import logger from 'redux-logger';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    comment: commentSlice.reducer,
    editMode: editModeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
