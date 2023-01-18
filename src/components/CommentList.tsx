import { useEffect } from 'react';
import styled from 'styled-components';
import { IComment } from '../type';
import { useAppSelector } from '../hooks';
import useActions from '../hooks/useAction';

function CommentList() {
  const commentList = useAppSelector<IComment[]>(
    ({ comments }) => comments.value,
  );
  const { getComments, deleteComment, setCurrentPage, setEditMode } =
    useActions();

  useEffect(() => {
    getComments(1);
  }, []);

  const clickDelComment = async (id: number) => {
    deleteComment(id);
    getComments(1);
    setCurrentPage(1);
  };
  const clickUpdateComment = (id: number) => {
    setEditMode(id);
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

