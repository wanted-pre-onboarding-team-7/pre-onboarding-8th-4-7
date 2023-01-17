import { useRef } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../util/axiosInstance';

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
  const authorRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const postComment = async () => {
    try {
      const response = await axiosInstance.post('', {
        profile_url: 'https://picsum.photos/id/27/50/50',
        author: authorRef.current?.value,
        content: contentRef.current?.value,
        createdAt: dateRef.current?.value,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormStyle>
      <form onSubmit={postComment}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
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
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
