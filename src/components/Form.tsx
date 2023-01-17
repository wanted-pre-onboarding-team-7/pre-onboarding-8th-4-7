import styled from 'styled-components';
import { CommentType } from '../type';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { createComment, editComment, getComment } from '../store/commentSlice';
import { setCurrentPageNum, toggleEditMode } from '../store/editModeSlice';

export const initialCommentState = {
  id: 0,
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};

function Form() {
  const dispatch = useDispatch<AppDispatch>();
  const { isEdit, targetComment } = useSelector(
    (state: RootState) => state.editMode,
  );

  const [commentForm, setCommentForm] =
    useState<CommentType>(initialCommentState);

  useEffect(() => {
    isEdit && setCommentForm(targetComment);
  }, [isEdit]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    setCommentForm({ ...commentForm, [e.target.name]: value });
  };

  const submitComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(createComment(commentForm));
    setCommentForm(initialCommentState);
    dispatch(setCurrentPageNum(1));
    await dispatch(getComment());
  };

  const submitEditComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    commentForm.id = targetComment.id;
    await dispatch(editComment(commentForm));
    setCommentForm(initialCommentState);
    dispatch(toggleEditMode(false));
    await dispatch(getComment());
  };

  return (
    <FormStyle>
      <form onSubmit={isEdit ? submitEditComment : submitComment}>
        <input
          type="text"
          name="profile_url"
          placeholder={
            isEdit
              ? targetComment.profile_url
              : 'https://picsum.photos/id/1/50/50'
          }
          value={commentForm.profile_url}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder={isEdit ? targetComment.author : '작성자'}
          value={commentForm.author}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder={isEdit ? targetComment.content : '내용'}
          value={commentForm.content}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder={isEdit ? targetComment.createdAt : '2020-05-30'}
          value={commentForm.createdAt}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }

  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
