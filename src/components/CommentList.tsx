import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useActions from '../hooks/useActions';
import { RootState } from '../store/CommentStore';

function CommentList() {
  const { comments, currentPage, limit } = useSelector(
    (state: RootState) => state,
  );
  const { getComments, deleteComment, setCurrentPage, setEditMode } =
    useActions();

  const handleDeleteComment = (id: number) => {
    deleteComment(id);
    getComments(1, limit);
    setCurrentPage(1);
  };

  useEffect(() => {
    getComments(currentPage, limit);
  }, [currentPage, limit]);

  return (
    <>
      {comments.map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <button onClick={() => setEditMode(comment.id!)}>수정</button>
            <button onClick={() => handleDeleteComment(comment.id!)}>
              삭제
            </button>
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
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(128, 128, 128, 0.4);
    }
  }
`;
