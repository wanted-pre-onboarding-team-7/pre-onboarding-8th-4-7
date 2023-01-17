import axios from 'axios';

const baseURL = 'http://localhost:4000';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const commentAxios = axios.create({
  baseURL,
  headers,
});

// 수정, 삭제, 페이지 클릭, 등록 클릭

export const getCommentsAxios = async () => {
  return await commentAxios.get('/comments').then((res) => res.data);
};

export const deleteCommentsAxios = async (id) => {
  return await commentAxios.get(`/comments/${id}`).then((res) => res.data);
};

export const editCommentAxios = async () => {};
