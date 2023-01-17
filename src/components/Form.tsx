import styled from 'styled-components';
import { CommentType } from '../type';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { createComment } from '../store/commentSlice';

const initialState = {
  id: 0,
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};
function Form() {
  const dispatch = useDispatch<AppDispatch>();
  const [commentForm, setCommentForm] = useState<CommentType>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    setCommentForm({ ...commentForm, [e.target.name]: value });
  };

  const submitComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createComment(commentForm));
    setCommentForm(initialState);
  };

  return (
    <FormStyle>
      <form onSubmit={submitComment}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={commentForm.profile_url}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={commentForm.author}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={commentForm.content}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
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
