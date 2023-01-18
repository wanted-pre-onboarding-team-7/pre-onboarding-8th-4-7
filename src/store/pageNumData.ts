const initialState = {
  totalPage: 1,
  currentPage: 1,
};

const PageNumReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TOTAL_PAGE':
      return {
        totalPage: action.totalPage,
      };
    case 'CURRENT_PAGE':
      return {
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export default PageNumReducer;
