import { axiosClient } from './axiosClient';

export const getComments = () => {
  return axiosClient.get('/');
};
