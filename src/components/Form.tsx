import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { addComment } from '../slice/commentSlice';
import { IComment } from '../type';

function Form() {
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
    await dispatch(addComment(newComment));
    clearInput();
  };
  const clearInput = () => {
    // profileRef.current?.value = '';
    if (profileRef.current) {
      profileRef.current.value = '';
    }
    if (authorRef.current) {
      authorRef.current.value = '';
    }
    if (contentRef.current) {
      contentRef.current.value = '';
    }
    if (dateRef.current) {
      dateRef.current.value = '';
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
