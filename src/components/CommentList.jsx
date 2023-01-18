import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteComment, deleteCommentAPI, getComment } from '../store/comment';
import { setPage } from '../store/pagination';
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

function CommentList() {
  const comments = useSelector((state) => state.comments.data);
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pagination);
  useEffect(() => {
    setPagination(pageNumber);
  }, [pageNumber]);
  const [pagination, setPagination] = useState(1);
  const deleteHandler = async (id) => {
    dispatch(deleteCommentAPI(id));
    dispatch(setPage(1));
  };
  return (
    <>
      {comments ? (
        comments
          .slice((pagination - 1) * 4, (pagination - 1) * 4 + 4)
          .map((comment, key) => (
            <Comment key={key}>
              <img src={comment.profile_url} alt="" />

              {comment.author}

              <CreatedAt>{comment.createdAt}</CreatedAt>

              <Content>{comment.content}</Content>

              <Button>
                <button onClick={() => dispatch(getComment(comment.id))}>
                  수정
                </button>
                <button onClick={() => deleteHandler(comment.id)}>삭제</button>
              </Button>

              <hr />
            </Comment>
          ))
      ) : (
        <div></div>
      )}
    </>
  );
}

export default CommentList;
