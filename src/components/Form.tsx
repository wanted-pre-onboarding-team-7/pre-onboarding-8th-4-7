import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { axiosInstance } from '../util/axiosInstance';
// import { getPageComments } from '../api/index';
import styled from 'styled-components';

function Form() {
  const authorRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLInputElement>(null);

  const postComment = async () => {
    try {
      const response = await axiosInstance.post('', {
        profile_url: profileRef.current?.value,
        author: authorRef.current?.value,
        content: contentRef.current?.value,
        createdAt: dateRef.current?.value,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const { currentPage } = useSelector(
    (state: RootState) => state.PageNumReducer,
  );

  const putComment = async () => {
    try {
      window.confirm('수정하시겠습니까?');
      const response = await axiosInstance.put(id.toString(), {
        profile_url: profileRef.current?.value,
        author: authorRef.current?.value,
        content: contentRef.current?.value,
        createdAt: dateRef.current?.value,
      });
      //   if (response.status === 200) getPageComments(currentPage);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const { id, profile_url, author, content, createdAt } = useSelector(
    (state: RootState) => ({
      id: state.PutReducer.id,
      profile_url: state.PutReducer.profile_url,
      author: state.PutReducer.author,
      content: state.PutReducer.content,
      createdAt: state.PutReducer.createdAt,
    }),
  );

  return (
    <FormStyle>
      <form onSubmit={id ? putComment : postComment}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          ref={profileRef}
          defaultValue={profile_url}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          ref={authorRef}
          defaultValue={author}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          ref={contentRef}
          defaultValue={content}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          ref={dateRef}
          defaultValue={createdAt}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

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

export default Form;
