import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCommentsByPage } from '../api/api';
import { IComment } from '../type';

const INIT_STATE = {
  value: {
    commentsByPage: [] as IComment[],
    currentPage: 1,
  },
};

export const fetchCommentByPage = createAsyncThunk(
  'page/fetchCommentByPage',
  async (pageNum: number) => {
    const commentsList: any = await getCommentsByPage(pageNum);
    return { commentsList, pageNum };
  },
);

export const pageSlice = createSlice({
  name: 'page',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentByPage.fulfilled, (state, { payload }: any) => {
      state.value.commentsByPage = [...payload.commentsList];
      state.value.currentPage = payload.pageNum;
    });
  },
});
export default pageSlice.reducer;
