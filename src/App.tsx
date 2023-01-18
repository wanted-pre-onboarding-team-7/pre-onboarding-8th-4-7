import React from 'react';
import { Provider } from 'react-redux';
import CommentListContainer from './containers/CommentListContainer';
import FormContainer from './containers/FormContainer';
import PageListContainer from './containers/PageListContainer';
import { store } from './store/commentReducer';

function App() {
  return (
    <Provider store={store}>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </Provider>
  );
}

export default App;
