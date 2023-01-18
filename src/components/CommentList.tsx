import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  deleteComment,
  fetchComments,
  updateCommentId,
} from '../slice/commentSlice';
import { IComment } from '../type';
import { useAppDispatch, useAppSelector } from '../hooks';
import { editMode } from '../slice/editModeSlice';
import { updateActivePage } from '../slice/pageSlice';

function CommentList() {
  const commentList = useAppSelector<IComment[]>(
    ({ comments }) => comments.value,
  );
  const dispatch = useAppDispatch();
  const getComments = async () => {
    await dispatch(fetchComments(1));
  };

  useEffect(() => {
    getComments();
  }, []);

  const clickDelComment = async (id: number) => {
    await dispatch(deleteComment(id));
    getComments();
    dispatch(updateActivePage(1));
  };
  const clickUpdateComment = (id: number) => {
    dispatch(updateCommentId(id));
    dispatch(editMode(id));
  };

  return (
    <>
      {commentList &&
        commentList?.map((comment, key) => (
          <Comment key={key}>
            <img src={comment.profile_url} alt="" />

            {comment.author}

            <CreatedAt>{comment.createdAt}</CreatedAt>

            <Content>{comment.content}</Content>

            <Button>
              <button onClick={() => clickUpdateComment(comment.id)}>
                수정
              </button>
              <button onClick={() => clickDelComment(comment.id)}>삭제</button>
            </Button>

            <hr />
          </Comment>
        ))}
    </>
  );
}

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

export default CommentList;
