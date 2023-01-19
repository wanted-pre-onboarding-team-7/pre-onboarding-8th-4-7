export interface IComment {
  id?: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}
export interface CommentsState {
  value: IComment[];
}
export interface IUpdateData {
  commentId: number;
  commentData: IComment;
}
