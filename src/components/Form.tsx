import React, { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useActions from '../hooks/useActions';
import { RootState } from '../store/CommentStore';
import axios from 'axios';

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();

  return `${year}-${month + 1}-${date}:${hour}:${minute}`;
}

function Form() {
  const date = getDate();
  const formRef = useRef<HTMLFormElement>(null);
  const profileRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const createdDateRef = useRef<HTMLInputElement>(null);
  const { limit, editMode, currentPage, editId } = useSelector(
    (state: RootState) => state,
  );
  const { createComment, getComments, setCurrentPage, updateComment } =
    useActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      profile_url: profileRef.current?.value,
      author: authorRef.current?.value,
      content: contentRef.current?.value,
      createdAt: createdDateRef.current?.value,
    };

    if (!editMode) {
      createComment(formData);
      getComments(1, limit);
      setCurrentPage(1);
    } else {
      updateComment(formData);
      getComments(currentPage, limit);
    }

    formRef.current?.reset();
  };

  useCallback(() => {
    axios.get(`http://localhost:4000/comments/${editId}`).then(console.log);
  }, [editId]);

  return (
    <FormStyle>
      <form ref={formRef} onSubmit={handleSubmit}>
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
          ref={contentRef}
          name="content"
          placeholder="내용"
          required
        ></textarea>
        <br />
        <input
          ref={createdDateRef}
          type="text"
          name="createdAt"
          defaultValue={date}
          required
          readOnly
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
