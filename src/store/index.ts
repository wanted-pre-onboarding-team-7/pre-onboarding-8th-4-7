import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { deleteCommentsAxios, getCommentsAxios } from '../api';

export const axiosGetComments = createAsyncThunk(
  'comment/axiosGetComments',
  async () => {
    const response = await getCommentsAxios();
    return response;
  },
);

export const axiosEraseComment = createAsyncThunk(
  'comment/axiosEraseComment',
  async (id: number) => {
    const response = await deleteCommentsAxios(id);
    return id;
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
    builder
      .addCase(axiosGetComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(axiosEraseComment.fulfilled, (state, action) => {
        const eraseId = action.payload;
        state.comments = state.comments.filter(({ id }) => id !== eraseId);
        state.currentPageIdx = 1;
      });
  },
});

export const { changePageIdx } = commentSlice.actions;

export const getCommentsInStore = (state: any) => state.comment.comments;
export const getcurrentPageIdxInStore = (state: any) =>
  state.comment.currentPageIdx;
export const getpagePerCommentsInStore = (state: any) =>
  state.comment.pagePerComments;

export default configureStore({
  reducer: { comment: commentSlice.reducer },
});
