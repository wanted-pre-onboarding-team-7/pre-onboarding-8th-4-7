import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setPage, editMode, fetchApi } from '../reducers/CommentReducer';
import { CommentsType } from '../type/CommentType';

const useActions = () => {
  const dispatch = useDispatch();

  const getComments = useCallback(
    (page: number, limit: number) => {
      dispatch(fetchApi({ requestType: 'comment/get', args: { page, limit } }));
    },
    [dispatch],
  );

  const createComment = useCallback(
    (newComment: CommentsType) => {
      dispatch(fetchApi({ requestType: 'comment/post', body: newComment }));
    },
    [dispatch],
  );

  const deleteComment = useCallback(
    (id: number) => {
      dispatch(fetchApi({ requestType: 'comment/delete', body: { id } }));
    },
    [dispatch],
  );

  const updateComment = useCallback(
    (updateComment: CommentsType) => {
      dispatch(fetchApi({ requestType: 'comment/put', body: updateComment }));
    },
    [dispatch],
  );

  const setCurrentPage = useCallback(
    (currentPage: number) => dispatch(setPage(currentPage)),
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
