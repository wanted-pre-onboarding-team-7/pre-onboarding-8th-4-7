import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CommentListContainer from './containers/CommentListContainer';
import FormContainer from './containers/FormContainer';
import PageListContainer from './containers/PageListContainer';
import { initCommentAPI } from './store/comment';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCommentAPI());
  }, []);

  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;
