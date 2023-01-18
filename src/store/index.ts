import { combineReducers } from '@reduxjs/toolkit';
import PutReducer from './commentData';
import TotalPageReducer from './totalPageData';
import PageDataReducer from './pageData';

export const rootReducer = combineReducers({
  PutReducer,
  TotalPageReducer,
  PageDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
