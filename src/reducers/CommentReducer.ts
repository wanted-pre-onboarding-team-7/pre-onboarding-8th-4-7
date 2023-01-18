import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stateType, thunkCallbackType } from '../type/CommentType';
import axios from 'axios';

const initialState: stateType = {
  comments: [],
  globalId: 23,
  status: 'idle',
  currentPage: 1,
  limit: 4,
  editMode: false,
  editId: 0,
};

const BASE_URL = 'http://localhost:4000/comments';

export const fetchApi = createAsyncThunk(
  'commentFetch',
  async (request: thunkCallbackType) => {
    const { requestType } = request;
    const { id } = request.body ?? {};

    switch (requestType) {
      case 'comment/get': {
        const { page, limit } = request.args ?? {};
        const response = await axios.get(
          `${BASE_URL}?_page=${page}&_limit=${limit}&_order=desc&_sort=id`,
        );

        return {
          requestType,
          data: response.data,
        };
      }

      case 'comment/delete':
        await axios.delete(`${BASE_URL}/${id}`);

        return {
          requestType,
          id,
        };

      case 'comment/put':
        await axios.put(`${BASE_URL}/${id}`, request.body);

        return {
          requestType,
          id,
          updatedComment: request.body,
        };

      case 'comment/post':
        await axios.post(`${BASE_URL}`, request.body);

        return {
          requestType,
          createdComment: request.body,
        };
    }
  },
);

export const CommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    editMode: (state, action) => {
      state.editMode = !state.editMode;
      state.editId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state, action) => {
      state.status = 'Loading';
    });

    builder.addCase(fetchApi.fulfilled, (state, action) => {
      switch (action.payload.requestType) {
        case 'comment/get':
          state.comments = action.payload.data;
          break;

        case 'comment/post':
          state.comments.unshift({
            id: state.globalId,
            ...action.payload.createdComment!,
          });
          state.globalId++;
          break;

        case 'comment/put':
          state.comments = state.comments.map((comment) => {
            return comment.id === action.payload.id
              ? { ...comment, ...action.payload.updatedComment }
              : comment;
          });
          break;

        case 'comment/delete':
          state.comments = state.comments.filter(
            (comment) => comment.id !== action.payload.id,
          );
          break;
      }

      state.status = 'Complete';
    });

    builder.addCase(fetchApi.rejected, (state, action) => {
      state.status = 'Fail';
    });
  },
});

export const { setPage, setLimit, editMode } = CommentSlice.actions;
