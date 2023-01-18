import { CommentExceptId } from '../type/types';

interface IComment {
  profile_url: string;
  auther: string;
  content: string;
  createdAt: string;
}

export class Comment implements IComment {
  profile_url;
  auther;
  content;
  createdAt;

  constructor(data: CommentExceptId) {
    this.profile_url = data.profile_url;
    this.auther = data.auther;
    this.content = data.content;
    this.createdAt = data.createdAt;
  }

  // "id": 1,
  // "profile_url": "https://picsum.photos/id/1/50/50",
  // "author": "abc_1",
  // "content": "UI 테스트는 어떻게 진행하나요",
  // "createdAt": "2022-03-01"
}
