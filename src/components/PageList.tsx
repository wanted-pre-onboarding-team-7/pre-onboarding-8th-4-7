import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchComments } from '../slice/commentSlice';
import { getTotalPage, updateActivePage } from '../slice/pageSlice';

function PageList() {
  const dispatch = useAppDispatch();
  const totalPageState = useAppSelector(({ pagination }) => pagination.value);
  const page = Array(totalPageState.totalPage).fill(0);
  const currentPage = totalPageState.currentPage;
  useEffect(() => {
    getTotalState();
  }, []);

  const getTotalState = async () => {
    await dispatch(getTotalPage());
  };
  const clickPageLink = async (pageIdx: number) => {
    await dispatch(fetchComments(pageIdx));
    dispatch(updateActivePage(pageIdx));
  };
  return (
    <PageListStyle>
      {page.map((ele, idx) => (
        <Page
          active={currentPage === idx + 1}
          key={idx}
          onClick={() => clickPageLink(idx + 1)}
        >
          {idx + 1}
        </Page>
      ))}
    </PageListStyle>
  );
}
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
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

export default PageList;
