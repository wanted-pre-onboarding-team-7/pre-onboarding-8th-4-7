import axios, { AxiosInstance } from 'axios';
import { CommentType, HttpClient } from '../type';

class AxiosClient implements HttpClient {
  _baseURL: string;
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this._baseURL = baseURL;
    this.instance = axios.create({ baseURL });
  }

  async get() {
    try {
      const response = await this.instance.get(`comments`);
      return response.data;
    } catch (e) {
      const { name } = e as Error;
      console.error(name || '정보를 불러오는데 실패했습니다.');
    }
  }

  async post(param: CommentType) {
    try {
      await this.instance.post(`comments`, param);
    } catch (e) {
      const { name } = e as Error;
      console.error(name || '정보를 불러오는데 실패했습니다.');
    }
  }

  async delete(commentId: number) {
    try {
      await this.instance.delete(`comments/${commentId}`);
    } catch (e) {
      const { name } = e as Error;
      console.error(name || '정보를 불러오는데 실패했습니다.');
    }
  }
}

const axiosClient = new AxiosClient(`http://localhost:4000/`);

export { axiosClient };
