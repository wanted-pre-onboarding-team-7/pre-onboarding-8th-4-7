const totalPage = 1;

const TotalPageReducer = (state = totalPage, action: any) => {
  switch (action.type) {
    case 'TOTAL_PAGE':
      return {
        totalPage: action.totalPage,
      };
    default:
      return state;
  }
};

export default TotalPageReducer;
