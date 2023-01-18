import { useCallback } from 'react';
import { IComment, IUpdateData } from '../type';
import {
  addCommentThunk,
  fetchCommentsThunk,
  deleteCommentThunk,
  updateCommentThunk,
} from '../slice/commentSlice';
import { updateActivePage } from '../slice/pageSlice';
import { editMode } from '../slice/editModeSlice';
import { useAppDispatch } from './useAppDispatch';

const useActions = () => {
  const dispatch = useAppDispatch();

  const getComments = useCallback(
    (pageNum: number) => {
      dispatch(fetchCommentsThunk(pageNum));
    },
    [dispatch],
  );

  const createComment = useCallback(
    (newComment: IComment) => {
      dispatch(addCommentThunk(newComment));
    },
    [dispatch],
  );

  const deleteComment = useCallback(
    (id: number) => {
      dispatch(deleteCommentThunk(id));
    },
    [dispatch],
  );

  const updateComment = useCallback(
    (updateData: IUpdateData) => {
      dispatch(updateCommentThunk(updateData));
    },
    [dispatch],
  );

  const setCurrentPage = useCallback(
    (currentPage: number) => dispatch(updateActivePage(currentPage)),
    [dispatch],
  );

  const setEditMode = useCallback(
    (currentComId: number) => dispatch(editMode(currentComId)),
    [],
  );

  return {
    getComments,
    createComment,
    deleteComment,
    updateComment,
    setCurrentPage,
    setEditMode,
  };
};

export default useActions;
