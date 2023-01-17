import { combineReducers } from '@reduxjs/toolkit';
import PutReducer from './commentData';

export const rootReducer = combineReducers({
  PutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
