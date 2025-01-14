import { createSlice } from '@reduxjs/toolkit';

export const EditModeSlice = createSlice({
  name: 'EditMode',
  initialState: { value: { mode: false, id: 0 } },
  reducers: {
    editMode: (state, { payload }) => {
      state.value = { mode: true, id: payload };
    },
    cancelEditMode: (state) => {
      state.value = { ...state.value, mode: false };
    },
  },
});
export const { editMode, cancelEditMode } = EditModeSlice.actions;
export default EditModeSlice.reducer;
