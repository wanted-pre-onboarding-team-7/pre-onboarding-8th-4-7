import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getCommentsByPage } from '../store/commentReducer';
import { MAX_PAGE_NUM } from '../util/constants';

const initialIsActive = Array(MAX_PAGE_NUM).fill(false);

function PageList() {
  const page = Array(MAX_PAGE_NUM)
    .fill(0)
    .map((_, i) => i + 1);
  const [isActive, setIsActive] = useState(initialIsActive);
  const dispatch = useDispatch();

  const onClickPageNum = (e) => {
    const currPageNum = e.target.id;
    const newIsActive = [...initialIsActive].map((_, i) => {
      return Number(currPageNum) === Number(i + 1) ? true : false;
    });

    setIsActive(newIsActive);
    dispatch(getCommentsByPage(currPageNum));
  };

  return (
    <PageListStyle>
      {page.map((v) => (
        <Page key={v} id={v} onClick={onClickPageNum} active={isActive[v - 1]}>
          {v}
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

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${(
    { active }: any, //FIXME: 임시로 any 타입 설정함
  ) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
  cursor: pointer;
`;
