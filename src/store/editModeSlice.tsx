import { initialCommentState } from '../components/Form';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEdit: false,
  targetComment: initialCommentState,
};

const editModeSlice = createSlice({
  name: 'editMode',
  initialState: initialState,
  reducers: {
    toggleEditMode: (state, action) => {
      state.isEdit = action.payload;
    },
    setTargetComment: (state, action) => {
      state.targetComment = action.payload;
    },
  },
});

export const { toggleEditMode, setTargetComment } = editModeSlice.actions;
export default editModeSlice;
