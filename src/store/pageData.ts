import { Icomment } from '../type/interface';

const comments: Icomment[] = [];

const PageDataReducer = (state = comments, action: any) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return {
        comments: action.comments,
      };
    default:
      return state;
  }
};

export default PageDataReducer;
