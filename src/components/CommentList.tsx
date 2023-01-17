import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsInStore, axiosComments } from '../store/index';

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
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

type Tcomments = {
  author: string;
  content: string;
  createdAt: string;
  id: number;
  profile_url: string;
};

function CommentList() {
  const dispatch = useDispatch();
  const comments = useSelector(getCommentsInStore);
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    dispatch(axiosComments());
  };
  return (
    <>
      {comments.map((comment: Tcomments) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt="" />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <Button>
            <a>수정</a>
            <a>삭제</a>
          </Button>
          <hr />
        </Comment>
      ))}
    </>
  );
}

export default CommentList;
