import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addComment, addCommentAPI, editComment, editCommentAPI } from '../store/comment';
import { setPage } from '../store/pagination';

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
  const [profile_url,setProfile] = useState("")
  const [author,setAuthor] = useState("")
  const [content,setContent] = useState("")
  const [createdAt,setCreatedAt] = useState("")
  const [now,setNow] = useState("")
  const comment = useSelector(state => state.comments.now)
  const dispatch = useDispatch()
  console.log(comment)
  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(addCommentAPI(profile_url,author,content,createdAt))
    setProfile("")
    setAuthor("")
    setContent("")
    setCreatedAt("")
    dispatch(setPage(1))
  }

  const onEdit = (e)=>{
    e.preventDefault();
    dispatch(editCommentAPI(comment.id,profile_url,author,content,createdAt))
    setProfile("")
    setAuthor("")
    setContent("")
    setCreatedAt("")
  }

  useEffect(()=>{
      setNow(comment)
      if(comment) {
        setProfile(comment.profile_url)
        setAuthor(comment.author)
        setContent(comment.content)
        setCreatedAt(comment.createdAt)
      }
      else {
        setProfile("")
        setAuthor("")
        setContent("")
        setCreatedAt("")
      }

  }
  ,[comment])
  return ( <div>
    {
    comment? 
    <FormStyle>
        <form>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          value={profile_url || ''}
          onChange={(e)=>setProfile(e.target.value)}
        />
        <br />
        <input type="text" value={author || ''} name="author" placeholder="작성자" onChange={(e)=>setAuthor(e.target.value)} />
        <br />
        <textarea name="content" value={content|| ''} placeholder="내용" required onChange={(e)=>setContent(e.target.value)}></textarea>
        <br />
        <input type="text" name="createdAt" value={createdAt|| ''} placeholder="2020-05-30" onChange={(e)=>setCreatedAt(e.target.value)} required />
        <br />
        <button onClick={onEdit}>수정</button>
        </form>
    </FormStyle>
    :     <FormStyle>
    <form>
    <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          value={profile_url || ''}
          onChange={(e)=>setProfile(e.target.value)}
        />
        <br />
        <input type="text" value={author || ''} name="author" placeholder="작성자" onChange={(e)=>setAuthor(e.target.value)} />
        <br />
        <textarea name="content" value={content|| ''} placeholder="내용" required onChange={(e)=>setContent(e.target.value)}></textarea>
        <br />
        <input type="text" name="createdAt" value={createdAt|| ''} placeholder="2020-05-30" onChange={(e)=>setCreatedAt(e.target.value)} required />
        <br />
    <button onClick={onSubmit}>등록</button>
    </form>
</FormStyle>
  }
  </div>
  );
}

export default Form;
