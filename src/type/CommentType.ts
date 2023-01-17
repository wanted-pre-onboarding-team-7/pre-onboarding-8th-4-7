export interface CommentsType {
  id?: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface stateType {
  comments: CommentsType[];
  globalId: number;
}
