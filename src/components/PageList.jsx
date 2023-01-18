import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setPage } from '../store/pagination';

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
const FocusPage = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  color: red;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  margin-right: 3px;
`;
const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  margin-right: 3px;
`;

function PageList() {
  const comments = useSelector((state) => state.comments.data);
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pagination);
  const [focus, setFocus] = useState(1);
  useEffect(() => {
    setFocus(pageNumber);
  }, [pageNumber]);
  return (
    <PageListStyle>
      {comments.slice(0, Math.ceil(comments.length / 4)).map((e, idx) => {
        return focus === idx + 1 ? (
          <FocusPage
            key={idx + 1}
            onClick={() => {
              setFocus(idx + 1);
              dispatch(setPage(idx + 1));
            }}
          >
            {idx + 1}
          </FocusPage>
        ) : (
          <Page
            key={idx + 1}
            onClick={() => {
              setFocus(idx + 1);
              dispatch(setPage(idx + 1));
            }}
          >
            {idx + 1}
          </Page>
        );
      })}
    </PageListStyle>
  );
}

export default PageList;
