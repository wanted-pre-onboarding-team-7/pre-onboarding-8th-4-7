import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  commentCreate,
  commentDelete,
  commentUpdate,
} from '../reducers/CommentReducer';
import { CommentsType } from '../type/CommentType';
import axios from 'axios';

const useActions = () => {
  const dispatch = useDispatch();

  const createComment = useCallback((newComment: CommentsType) => {
    dispatch(commentCreate({ ...newComment }));
    axios.post(`/comments`, newComment);
  }, []);

  const deleteComment = useCallback((id: number) => {
    dispatch(commentDelete({ id }));
    axios.delete(`/comments/${id}`);
  }, []);

  const updateComment = useCallback((updateComment: CommentsType) => {
    dispatch(commentUpdate({ ...updateComment }));
    axios.put(`/comments/${updateComment.id}`, updateComment);
  }, []);

  return { createComment, deleteComment, updateComment };
};

export default useActions;
