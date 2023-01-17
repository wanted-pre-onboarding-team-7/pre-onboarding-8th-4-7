import React from 'react';
import styled from 'styled-components';
import { getCommentsInStore, getpagePerCommentsInStore } from '../store';
import { useSelector } from 'react-redux';

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
  ${({ active }: any) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

function PageList() {
  const comments = useSelector(getCommentsInStore);

  const pagePerComments = useSelector(getpagePerCommentsInStore);

  const pageArray = Array(Math.floor(comments.length / pagePerComments))
    .fill(0)
    .map((_, idx) => idx + 1);

  return (
    <PageListStyle>
      {pageArray.map((v) => (
        <Page key={v}>{v}</Page>
      ))}
    </PageListStyle>
  );
}

export default PageList;
