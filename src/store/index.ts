import { combineReducers } from '@reduxjs/toolkit';
import PutReducer from './commentData';
import PageNumReducer from './pageNumData';
import PageDataReducer from './pageData';

export const rootReducer = combineReducers({
  PutReducer,
  PageNumReducer,
  PageDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
