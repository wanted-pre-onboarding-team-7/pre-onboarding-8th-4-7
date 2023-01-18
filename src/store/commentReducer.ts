import {
  combineReducers,
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const getCommentsByPage = createAsyncThunk(
  'comments/get',
  async (pageNum, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/comments?_page=${pageNum}&_limit=4&_order=desc&_sort=id`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialCommentsState = {
  loading: '',
  comments: [],
};
export const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialCommentsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsByPage.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getCommentsByPage.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.comments = action.payload;
    });
    builder.addCase(getCommentsByPage.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

const combinedReducers = combineReducers({
  fetchReducer: commentsSlice.reducer,
});

// export type RootState = ReturnType<typeof combinedReducers>;

const rootReducer = (state: any, action: any) => {
  if (!action.type) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

// https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
// export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch;
