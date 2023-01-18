import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const container = document.getElementById('root');
const root = createRoot(container);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
console.log(store.getState());
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
