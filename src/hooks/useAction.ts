import { useCallback } from 'react';
import { IComment, IUpdateData } from '../type';
import {
  addCommentThunk,
  fetchCommentsThunk,
  deleteCommentThunk,
  updateCommentThunk,
} from '../slice/commentSlice';
import { cancelEditMode, editMode } from '../slice/editModeSlice';
import { useAppDispatch } from './useAppDispatch';
import { fetchCommentByPage } from '../slice/pageSlice';

const useActions = () => {
  const dispatch = useAppDispatch();

  const getComments = useCallback(() => {
    dispatch(fetchCommentsThunk());
  }, [dispatch]);

  const createComment = useCallback(
    async (newComment: IComment) => {
      await dispatch(addCommentThunk(newComment));
      loadFirstPage();
    },
    [dispatch],
  );

  const deleteComment = useCallback(
    async (id: number) => {
      await dispatch(deleteCommentThunk(id));
      loadFirstPage();
    },
    [dispatch],
  );

  const updateComment = useCallback(
    async (updateData: IUpdateData, currentPage: number) => {
      await dispatch(updateCommentThunk(updateData));
      dispatch(cancelEditMode());
      dispatch(fetchCommentByPage(currentPage));
    },
    [dispatch],
  );

  const setEditMode = useCallback(
    (currentComId: number) => dispatch(editMode(currentComId)),
    [],
  );

  const loadFirstPage = useCallback(() => {
    dispatch(fetchCommentByPage(1));
  }, [dispatch]);

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
