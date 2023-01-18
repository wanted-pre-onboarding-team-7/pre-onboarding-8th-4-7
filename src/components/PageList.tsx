import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchCommentsThunk } from '../slice/commentSlice';

import { getTotalPage, updateActivePage } from '../slice/pageSlice';

function PageList() {
  const dispatch = useAppDispatch();
  const getTotalPageNum = async () => {
    await dispatch(getTotalPage());
  };
  useEffect(() => {
    getTotalPageNum();
  }, []);

  const totalPageState = useAppSelector(({ pagination }) => pagination.value);
  const page = Array(totalPageState.totalPage)
    .fill(0)
    .map((_, i) => i + 1);
  const initialIsActive = Array(totalPageState.totalPage).fill(false);
  const [isActive, setIsActive] = useState(initialIsActive);

  const onClickPageNum = async (pageId: number) => {
    const currPageNum = pageId;
    const newIsActive = [...initialIsActive].map((_, i) => {
      return Number(currPageNum) === Number(i + 1) ? true : false;
    });

    setIsActive(newIsActive);
    // await dispatch(fetchCommentsThunk(pageId));
    dispatch(updateActivePage(pageId));
  };

  return (
    <PageListStyle>
      {page.map((v) => (
        <Page
          key={v}
          onClick={() => onClickPageNum(v)}
          active={totalPageState.currentPage === v}
        >
          {v}
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
  ${(
    { active }, //FIXME: 임시로 any 타입 설정함
  ) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
  cursor: pointer;
`;
export default PageList;
