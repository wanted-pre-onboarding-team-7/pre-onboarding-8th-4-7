import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addMode } from '../slice/editModeSlice';
import { updateActivePage } from '../slice/pageSlice';
import { IComment } from '../type';
import useAction from '../hooks/useAction';

function Form() {
  const isEditMode = useAppSelector(({ isEditMode }) => isEditMode.value);
  const [commentData, setCommentData] = useState<IComment>(INIT);
  const { getComments, createComment } = useAction();
  const { updateComment } = useAction();
  const commentList = useAppSelector<IComment[]>(
    ({ comments }) => comments.value,
  );
  useEffect(() => {
    if (isEditMode.mode) {
      const editComment =
        commentList.find((e) => e.id === isEditMode.id) || INIT;
      setCommentData(editComment);
    } else {
      setCommentData(INIT);
    }
  }, [isEditMode]);

  useEffect(() => {
    clearInput();
  }, [commentData]);

  const dispatch = useAppDispatch();
  const profileRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const clickAddComment = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const newComment: IComment = {
      id: 0,
      profile_url: String(profileRef.current?.value),
      author: String(authorRef.current?.value),
      content: String(contentRef.current?.value),
      createdAt: String(dateRef.current?.value),
    };

    if (isEditMode.mode) {
      updateComment({ commentId: isEditMode.id, commentData: newComment });
      dispatch(addMode());
    } else {
      createComment(newComment);
      getComments(1);
      dispatch(updateActivePage(1));
    }
    clearInput();
  };
  const clearInput = () => {
    // profileRef.current?.value = '';
    if (profileRef.current) {
      profileRef.current.value = isEditMode.mode
        ? commentData?.profile_url
        : '';
    }
    if (authorRef.current) {
      authorRef.current.value = isEditMode.mode ? commentData?.author : '';
    }
    if (contentRef.current) {
      contentRef.current.value = isEditMode.mode ? commentData?.content : '';
    }
    if (dateRef.current) {
      dateRef.current.value = isEditMode.mode ? commentData?.createdAt : '';
    }
  };

  return (
    <FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          ref={profileRef}
          required
        />
        <br />
        <input type="text" name="author" placeholder="작성자" ref={authorRef} />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          ref={contentRef}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          ref={dateRef}
          required
        />
        <br />
        <button type="submit" onClick={clickAddComment}>
          등록
        </button>
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

const INIT = {
  id: 0,
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};
