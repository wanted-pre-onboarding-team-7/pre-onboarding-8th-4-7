import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchCommentByPage } from '../slice/pageSlice';

function PageList() {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(({ pagination }) => pagination.value);
  const [_, setPage] = useState<number>();
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  const commentsList = useAppSelector(({ comments }) => comments.value);

  const onClickPageNum = (pageNum: number) => {
    dispatch(fetchCommentByPage(pageNum));
  };

  return (
    <PageListStyle>
      {commentsList
        .slice(0, Math.ceil(commentsList.length / 4))
        .map((v, idx) => (
          <Page
            key={idx}
            onClick={() => onClickPageNum(idx + 1)}
            active={currentPage === idx + 1}
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
