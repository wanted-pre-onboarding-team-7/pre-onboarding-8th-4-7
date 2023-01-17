// const data = [
//   {
//     id: 1,
//     profile_url: 'https://picsum.photos/id/1/50/50',
//     author: 'abc_1',
//     content: 'UI 테스트는 어떻게 진행하나요',
//     createdAt: '2020-05-01',
//   },
// ];

import { AxiosInstance, AxiosResponse } from 'axios';

export interface CommentParams {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createAt: string;
}

export interface HttpClient {
  instance: AxiosInstance;
  get: () => Promise<AxiosResponse>;
}
