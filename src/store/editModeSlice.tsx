import { initialCommentState } from '../components/Form';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEdit: false,
  targetComment: initialCommentState,
  currentPageNum: 1,
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
    setCurrentPageNum: (state, action) => {
      state.currentPageNum = action.payload;
    },
  },
});

export const { toggleEditMode, setTargetComment, setCurrentPageNum } =
  editModeSlice.actions;
export default editModeSlice;
