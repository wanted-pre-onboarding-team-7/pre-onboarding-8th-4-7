import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { AppDispatch, RootState } from '../store';
import { setCurrentPageNum } from '../store/editModeSlice';

function PageList() {
  const POSTS_PER_PAGE = 4;
  const dispatch = useDispatch<AppDispatch>();
  const commentList = useSelector((state: RootState) => state.comment);
  const NumPages = Math.ceil(commentList.length / POSTS_PER_PAGE);
  const currentPageNum = useSelector(
    (state: RootState) => state.editMode.currentPageNum,
  );
  const pageArray = [];

  for (let i = 1; i <= NumPages; i++) {
    pageArray.push(i);
  }

  const clickPageNum = (number: number) => {
    dispatch(setCurrentPageNum(number));
  };

  return (
    <PageListStyle>
      {pageArray.map((number) => (
        <Page
          key={number}
          onClick={() => clickPageNum(number)}
          active={currentPageNum === number}
        >
          {number}
        </Page>
      ))}
    </PageListStyle>
  );
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button<{ active: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `
      background: gray;
      color: #fff;
    `}
  margin-right: 3px;
`;
