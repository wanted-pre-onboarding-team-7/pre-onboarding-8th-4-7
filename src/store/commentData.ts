const initialState = {
  id: '',
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
};

const PutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_INPUT_VALUE':
      return {
        ...state,
        id: action.id,
        profile_url: action.profile_url,
        author: action.author,
        content: action.content,
        createdAt: action.createdAt,
      };
    case 'CLICK':
      return {
        ...state,
        UserName: action.UserName,
        UserAccount: action.UserAccount,
        UserIntro: action.UserIntro,
        UserImage: action.UserImage,
      };

    default:
      return state;
  }
};

export default PutReducer;
