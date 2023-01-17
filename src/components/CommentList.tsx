import { useEffect, useState } from 'react';
import { axiosInstance } from '../util/axiosInstance';
import CommentItem from './CommentItem';

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
      {comments.map((comments: Icomment) => {
        return <CommentItem key={comments.id} comments={comments} />;
      })}
    </>
  );
}

export default CommentList;
