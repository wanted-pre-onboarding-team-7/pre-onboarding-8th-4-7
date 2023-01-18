export interface CommentsType {
  id?: number;
  profile_url?: string;
  author?: string;
  content?: string;
  createdAt?: string;
}

export interface stateType {
  comments: CommentsType[];
  globalId: number;
  status: 'idle' | 'Loading' | 'Complete' | 'Fail';
  currentPage: number;
  limit: number;
  editMode: boolean;
  editId: number;
}

export type fetchType =
  | 'comment/get'
  | 'comment/delete'
  | 'comment/put'
  | 'comment/post';

export interface thunkCallbackType {
  requestType: fetchType;
  body?: CommentsType;
  args?: {
    page: number;
    limit: number;
    sort?: string;
    order?: string;
  };
}
