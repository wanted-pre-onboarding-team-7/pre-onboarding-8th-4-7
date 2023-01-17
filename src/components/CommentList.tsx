import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommentsType } from '../type/CommentType';

function CommentList() {
  const [data, setData] = useState<CommentsType[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/comments')
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      {data.map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <a href="/">수정</a>
            <a href="/">삭제</a>
          </Button>

          <hr />
        </Comment>
      ))}
    </>
  );
}

export default CommentList;

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
