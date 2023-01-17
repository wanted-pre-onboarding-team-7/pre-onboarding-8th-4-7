import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './commentSlice';
import editModeSlice from './editModeSlice';

export const store = configureStore({
  reducer: {
    comment: commentSlice.reducer,
    editMode: editModeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
