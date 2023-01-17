import { AxiosInstance, AxiosResponse } from 'axios';

export interface CommentType {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface HttpClient {
  instance: AxiosInstance;
  get: () => Promise<AxiosResponse>;
}
