import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch, RootState } from '../store';
import { deleteComment, getComment } from '../store/commentSlice';
import { setTargetComment, toggleEditMode } from '../store/editModeSlice';
import { CommentType } from '../type';
import { useEffect } from 'react';

function CommentList() {
  const dispatch = useDispatch<AppDispatch>();
  const commentList = useSelector((state: RootState) => state.comment);
  const currentPageNum = useSelector(
    (state: RootState) => state.editMode.currentPageNum,
  );
  const indexOfLast = currentPageNum * 4;
  const indexOfFirst = indexOfLast - 4;

  useEffect(() => {
    dispatch(getComment());
  }, []);
  const clickDeleteButton = (commentId: number) => {
    dispatch(deleteComment(commentId));
  };

  const clickEditButton = (comment: CommentType) => {
    dispatch(toggleEditMode(true));
    dispatch(setTargetComment(comment));
  };

  const slicedCommentList = commentList.slice(indexOfFirst, indexOfLast);

  return (
    <>
      {slicedCommentList.map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <a onClick={() => clickEditButton(comment)}>수정</a>
            <a onClick={() => clickDeleteButton(comment.id)}>삭제</a>
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
