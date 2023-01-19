import { useCallback } from 'react';
import { IComment, IUpdateData } from '../type';
import {
  addCommentThunk,
  fetchCommentsThunk,
  deleteCommentThunk,
  updateCommentThunk,
} from '../slice/commentSlice';
import { editMode } from '../slice/editModeSlice';
import { useAppDispatch } from './useAppDispatch';

const useActions = () => {
  const dispatch = useAppDispatch();

  const getComments = useCallback(() => {
    dispatch(fetchCommentsThunk());
  }, [dispatch]);

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

  const setEditMode = useCallback(
    (currentComId: number) => dispatch(editMode(currentComId)),
    [],
  );

  const loadFirstPage = useCallback(() => {
    getComments(1);
    setCurrentPage(1);
  }, [getComments, setCurrentPage]);

  return {
    loadFirstPage,
    getComments,
    createComment,
    deleteComment,
    updateComment,
    setEditMode,
  };
};

export default useActions;
