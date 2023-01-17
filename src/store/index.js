import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getCommentsAxios } from '../api';

export const axiosComments = createAsyncThunk(
  'comment/axiosComments',
  async () => {
    const response = await getCommentsAxios();
    return response;
  },
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    currentPageIdx: 1,
    pagePerComments: 4,
  },
  reducers: {
    changePageIdx: (state, action) => {
      state.currentPageIdx = action.payload.idx;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const { changePageIdx } = commentSlice.actions;

export const getCommentsInStore = (state) => state.comment.comments;
export const getcurrentPageIdxInStore = (state) => state.comment.currentPageIdx;
export const getpagePerCommentsInStore = (state) =>
  state.comment.pagePerComments;

export default configureStore({
  reducer: { comment: commentSlice.reducer },
});
