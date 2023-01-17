import { axiosInstance } from '../util/axiosInstance';
import { useDispatch } from 'react-redux';
import { Icomment } from '../type/interface';
import styled from 'styled-components';

function CommentItem({ comments }: { comments: Icomment }) {
  const dispatch = useDispatch();
  const deleteComment = async () => {
    try {
      window.confirm('삭제하시겠습니까?');
      const response = await axiosInstance.delete(comments.id.toString());
      console.log(response.data);
      if (response.status === 200) window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Comment>
      <img src={comments.profile_url} alt="" />
      {comments.author}
      <CreatedAt>{comments.createdAt}</CreatedAt>
      <Content>{comments.content}</Content>
      <Button>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: 'ADD_INPUT_VALUE',
              id: comments.id,
              profile_url: comments.profile_url,
              author: comments.author,
              content: comments.content,
              createdAt: comments.createdAt,
            });
          }}
        >
          수정
        </button>
        <button type="button" onClick={deleteComment}>
          삭제
        </button>
      </Button>
      <hr />
    </Comment>
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

export default CommentItem;
