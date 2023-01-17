import { IComment } from '../type';
import { axiosClient } from './axiosClient';

export const getComments = () => {
  return axiosClient.get('/');
};

export const postComment = (comment: IComment) => {
  return axiosClient.post('/', comment);
};

export const delComment = (commentId: number) => {
  return axiosClient.delete(`/${commentId}`);
};
