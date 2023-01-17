import { useEffect, useState } from 'react';
import { axiosInstance } from '../util/axiosInstance';
import styled from 'styled-components';

interface Icomment {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

function CommentList() {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const response = await axiosInstance.get('');
      console.log(response.data);
      setComments(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {comments.map(
        ({ id, profile_url, author, content, createdAt }: Icomment) => (
          <Comment key={id}>
            <img src={profile_url} alt="" />
            {author}
            <CreatedAt>{createdAt}</CreatedAt>
            <Content>{content}</Content>
            <Button>
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </Button>
            <hr />
          </Comment>
        ),
      )}
    </>
  );
}

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

export default CommentList;
