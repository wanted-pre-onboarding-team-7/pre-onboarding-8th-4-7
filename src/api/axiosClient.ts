import axios from 'axios';

const BASE_URL = 'http://localhost:4000/comments';
export const axiosClient = axios.create({ baseURL: BASE_URL });

axiosClient.interceptors.response.use((response) => {
  return response.data;
});
