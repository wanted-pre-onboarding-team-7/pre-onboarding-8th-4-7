import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { delComment, postComment, putComment } from '../api/api';
import { CommentsState, IComment, IUpdateData } from '../type';
import { getComments } from '../api/api';
const INIT_STATE: CommentsState = {
  value: [],
};

export const fetchCommentsThunk = createAsyncThunk(
  'comments/fetchComments', // 액션타입 생성
  async () => {
    const commentsList = await getComments();
    return commentsList;
  },
);

export const addCommentThunk = createAsyncThunk(
  'comments/addComment',
  async (commentData: IComment) => {
    return await postComment(commentData);
  },
);
export const deleteCommentThunk = createAsyncThunk(
  'comment/deleteComment',
  async (commentId: number) => {
    await delComment(commentId);
    return commentId;
  },
);

export const updateCommentThunk = createAsyncThunk(
  'comment/updateComment',
  async (updateData: IUpdateData) => {
    await putComment(updateData.commentId, updateData.commentData);
    return updateData;
  },
);

export const commentSlice = createSlice({
  name: 'comments',
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsThunk.fulfilled, (state, { payload }: any) => {
        state.value = [...payload];
      })
      .addCase(addCommentThunk.fulfilled, (state, { payload }: any) => {
        state.value = [...state.value, payload];
      })
      .addCase(deleteCommentThunk.fulfilled, (state, { payload }: any) => {
        state.value = state.value.filter((ele) => ele.id !== payload);
      })
      .addCase(updateCommentThunk.fulfilled, (state, { payload }: any) => {
        state.value = state.value.map((ele) => {
          if (ele.id === payload.commentId) {
            return { ...payload.commentData };
          }
          return ele;
        });
      });
  },
});

export default commentSlice.reducer;
