import { IComment } from '../type';

const COMMENT_ID = 'commentById';

export const checkLocalStorage = () => {
  if (getLocalStorageComment()) {
    return true;
  }
  return false;
};
export const getLocalStorageComment = () => {
  const data = localStorage.getItem(COMMENT_ID);
  // return JSON.parse(data);
  return data;
};
export const saveLocalStorageComment = (commentData: IComment) => {
  return localStorage.setItem(COMMENT_ID, JSON.stringify(commentData));
};
