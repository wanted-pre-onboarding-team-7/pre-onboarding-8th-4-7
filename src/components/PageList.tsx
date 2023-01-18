import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/CommentStore';
import useActions from '../hooks/useActions';

function PageList() {
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, limit } = useSelector((state: RootState) => state);
  const { setCurrentPage } = useActions();
  const pageArray = Array(totalPage)
    .fill(1)
    .map((e, i) => (
      <Page
        active={currentPage === i + 1}
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </Page>
    ));

  useEffect(() => {
    axios.get('http://localhost:4000/comments').then((res) => {
      setTotalPage(Math.ceil(res.data.length / limit));
    });
  }, [currentPage, limit]);

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button<{ active?: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;
