import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getComments } from '../api/api';

const INIT_STATE = {
  value: {
    totalPage: 0,
    currentPage: 1,
  },
};

export const getTotalPage = createAsyncThunk(
  'page/fetchAllComments',
  async () => {
    const commentsList = await getComments();
    return commentsList;
  },
);

export const pageSlice = createSlice({
  name: 'page',
  initialState: INIT_STATE,
  reducers: {
    updateActivePage: (state, { payload }) => {
      state.value.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTotalPage.fulfilled, (state, { payload }: any) => {
      state.value.totalPage = Math.ceil(payload.length / 4);
    });
  },
});
export const { updateActivePage } = pageSlice.actions;
export default pageSlice.reducer;
