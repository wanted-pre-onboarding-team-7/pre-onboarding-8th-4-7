import { IComment } from '../type';
import { axiosClient } from './axiosClient';

export const getComments = () => {
  return axiosClient.get('/');
};

export const getCommentsByPage = (pageNum: number) => {
  return axiosClient.get(`?_page=${pageNum}&_limit=4&_order=desc&_sort=createdAt
  `);
};
export const postComment = (comment: IComment) => {
  return axiosClient.post('/', comment);
};

export const delComment = (commentId: number) => {
  return axiosClient.delete(`/${commentId}`);
};

export const putComment = (commentId: number, comment: IComment) => {
  return axiosClient.put(`/${commentId}`, comment);
};
