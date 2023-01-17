import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { axiosPostComment } from '../store';

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

function Form() {
  const dispatch = useDispatch();
  const profileRef = useRef<HTMLInputElement | null>(null);
  const authorRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const createdAtRef = useRef<HTMLInputElement | null>(null);

  const clickSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      axiosPostComment({
        profile_url: profileRef?.current.value,
        author: authorRef?.current.value,
        content: contentRef?.current.value,
        createdAt: createdAtRef?.current.value,
      }),
    );
  };
  return (
    <FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          ref={profileRef}
        />
        <br />
        <input type="text" name="author" placeholder="작성자" ref={authorRef} />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          ref={contentRef}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          ref={createdAtRef}
        />
        <br />
        <button type="submit" onClick={clickSubmit}>
          등록
        </button>
      </form>
    </FormStyle>
  );
}

export default Form;
