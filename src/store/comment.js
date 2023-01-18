import axios from 'axios';

const ADD_COMMENT = 'comments/ADD_COMMENT';
const GET_COMMENT = 'comments/GET_COMMENT';
const EDIT_COMMENT = 'comments/EDIT_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';
const INIT_COMMENT = 'comments/INIT_COMMENT';


export const addComment = (profile_url, author, content, createdAt, id) => ({
  type: ADD_COMMENT,
  comment: {
    id: id,
    profile_url,
    author,
    content,
    createdAt,
  },
});

export const addCommentAPI = (profile_url, author, content, createdAt) => {
  return async (dispatch, getState) => {
    try {
      await axios
        .post('http://localhost:4000/comments', {
          profile_url,
          author,
          content,
          createdAt,
        })
        .then((res) =>
          dispatch(
            addComment(profile_url, content, author, createdAt, res.data.id),
          ),
        );
    } catch (e) {}
  };
};

export const getComment = (id) => ({
  type: GET_COMMENT,
  id,
});
export const initComment = (data) => ({ type: INIT_COMMENT, data });
export const initCommentAPI = () => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get('http://localhost:4000/comments');
      dispatch(initComment(res.data));
    } catch (e) {}
  };
};
export const editComment = (id, profile_url, author, content, createdAt) => ({
  type: EDIT_COMMENT,
  comment: {
    id,
    profile_url,
    author,
    content,
    createdAt,
  },
});
export const editCommentAPI = (id, profile_url, author, content, createdAt) => {
  return async (dispatch, getState) => {
    try {
      await axios.put(`http://localhost:4000/comments/${id}`, {
        profile_url,
        author,
        content,
        createdAt,
      });
      await dispatch(editComment(id, profile_url, author, content, createdAt));
    } catch (e) {}
  };
};
export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id,
});
export const deleteCommentAPI = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios.delete(`http://localhost:4000/comments/${id}`);
      await dispatch(deleteComment(id));
    } catch (e) {
      console.error(e);
    }
  };
};
const initialState = {
  now: '',
  data: [],
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      console.log(state);
      return { ...state, data: [...state.data, action.comment] };
    case INIT_COMMENT:
      return { ...state, data: [...action.data] };
    case GET_COMMENT:
      return { ...state, now: state.data.find((e, idx) => e.id === action.id) };
    case EDIT_COMMENT:
      const data = [...state.data];
      const idx = state.data.findIndex((a) => a.id === action.comment.id);
      data[idx] = action.comment;
      return {
        ...state,
        now: '',
        data,
      };
    case DELETE_COMMENT:
      console.log(state);
      return {
        ...state,
        data: state.data.filter((e, idx) => e.id !== action.id),
      };

    default:
      return state;
  }
}
