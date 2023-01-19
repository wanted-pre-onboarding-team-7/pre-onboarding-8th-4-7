import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { cancelEditMode } from '../slice/editModeSlice';
import { IComment } from '../type';
import useAction from '../hooks/useAction';
import { EditForm, IForm, NewEmptyForm } from '../class/FormState';
import { fetchCommentByPage } from '../slice/pageSlice';

function Form() {
  const isEditMode = useAppSelector(({ isEditMode }) => isEditMode.value);
  const { currentPage } = useAppSelector(({ pagination }) => pagination.value);
  const commentList = useAppSelector<IComment[]>(
    ({ comments }) => comments.value,
  );
  const [commentData, setCommentData] = useState<IForm>(new NewEmptyForm());
  const profileRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const authorRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const contentRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);
  const createdAtRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const { createComment, updateComment, loadFirstPage } = useAction();
  const dispatch = useAppDispatch();

  // console.log('commentList', commentList);
  // console.log('isEditMode', isEditMode);
  useEffect(() => {
    if (isEditMode.mode) {
      const editComment: IComment =
        commentList.find((e) => e.id === isEditMode.id) || ({} as IComment);
      setCommentData(new EditForm(editComment));
    }
  }, [isEditMode]);

  useEffect(() => {
    loadRefs();
  }, [commentData]);

  const loadRefs = () => {
    profileRef.current.value = commentData.profile_url;
    authorRef.current.value = commentData.author;
    contentRef.current.value = commentData.content;
    createdAtRef.current.value = commentData.createdAt;
  };

  const saveRefToComment = () => {
    commentData.profile_url = profileRef.current.value;
    commentData.author = authorRef.current.value;
    commentData.content = contentRef.current.value;
    commentData.createdAt = createdAtRef.current.value;
  };

  const onSubmitComment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveRefToComment();
    const newComment = commentData.getCommentObject();

    if (isEditMode.mode) {
      updateComment({ commentId: isEditMode.id, commentData: newComment });
      dispatch(cancelEditMode());
      dispatch(fetchCommentByPage(currentPage));
    } else {
      createComment(newComment);
      loadFirstPage();
    }

    setCommentData(new NewEmptyForm());
  };

  return (
    <FormStyle>
      <form onSubmit={onSubmitComment}>
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
          ref={createdAtRef}
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
