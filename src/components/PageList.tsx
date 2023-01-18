import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
// import { axiosInstance } from '../util/axiosInstance';
// import { getPageComments } from '../api/index';
import styled from 'styled-components';

function PageList() {
  const dispatch = useDispatch();
  const { totalPage } = useSelector((state: RootState) => state.PageNumReducer);
  console.log(totalPage);

  //   const getPageComments = async (pageNumber: number) => {
  //     const response = await axiosInstance.get(
  //       `?_page=${pageNumber}&_limit=4&_order=desc&_sort=id`,
  //     );
  //     dispatch({
  //       type: 'SET_COMMENTS',
  //       comments: response.data,
  //     });
  //   };

  const pageArray = [];
  for (let i = 1; i <= totalPage; i++) {
    pageArray.push(
      <Page
        key={i}
        onClick={() => {
          //   getPageComments(i);
          dispatch({
            type: 'CURRENT_PAGE',
            currentPage: i,
          });
        }}
      >
        {i}
      </Page>,
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
}

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: pointer;
  ${({ active }: any) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

export default PageList;
