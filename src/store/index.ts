import { configureStore } from '@reduxjs/toolkit';
import commentSlice from '../slice/commentSlice';
import EditModeSlice from '../slice/editModeSlice';
import pageSlice from '../slice/pageSlice';

export const store = configureStore({
  reducer: {
    comments: commentSlice,
    isEditMode: EditModeSlice,
    pagination: pageSlice,
  },
  // TODO: middleware:
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
