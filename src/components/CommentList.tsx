import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IComment } from '../type';
import { useAppDispatch, useAppSelector } from '../hooks';
import useActions from '../hooks/useAction';
import { fetchCommentByPage } from '../slice/pageSlice';

function CommentList() {
  const dispatch = useAppDispatch();
  const { commentsByPage } = useAppSelector(
    ({ pagination }) => pagination.value,
  );
  const { getComments, deleteComment, setEditMode } = useActions();
  const [commentList, setCommentList] = useState<IComment[]>();

  useEffect(() => {
    getComments();
    dispatch(fetchCommentByPage(1));
  }, []);

  useEffect(() => {
    setCommentList(commentsByPage);
  }, [commentsByPage]);

  const clickDelComment = async (id: number) => {
    deleteComment(id);
    dispatch(fetchCommentByPage(1));
  };
  const clickUpdateComment = (id: number) => {
    setEditMode(id);
  };
  return (
    <>
      {commentList &&
        commentList?.map((comment: any, idx: number) => (
          <Comment key={idx}>
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
