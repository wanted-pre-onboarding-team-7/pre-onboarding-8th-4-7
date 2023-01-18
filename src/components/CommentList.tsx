import { useEffect } from 'react';
import { axiosInstance } from '../util/axiosInstance';
import { Icomment } from '../type/interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import CommentItem from './CommentItem';

function CommentList() {
  //   const [comments, setComments] = useState([]);
  const { comments } = useSelector((state: RootState) => state.PageDataReducer);

  const dispatch = useDispatch();

  //전체페이지 구하는 용
  const getComments = async () => {
    try {
      const response = await axiosInstance.get('');
      console.log(response);
      //   setComments(response.data);
      dispatch({
        type: 'TOTAL_PAGE',
        totalPage: Math.ceil(response.data.length / 4),
      });
      dispatch({
        type: 'SET_COMMENTS',
        comments: response.data.reverse().slice(0, 4),
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {comments?.map((comments: Icomment) => {
        return <CommentItem key={comments.id} comments={comments} />;
      })}
    </>
  );
}

export default CommentList;
