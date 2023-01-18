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

    default:
      return state;
  }
};

export default PutReducer;
