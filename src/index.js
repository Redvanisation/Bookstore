/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import generalReducer from './reducers/index';
import './style/main.scss';

const makeId = () => Math.floor(Math.random() * 10);

const initialState = {
  books: [
    {
      bookId: makeId(),
      title: 'React',
      category: 'action',
    },
    {
      bookId: makeId(),
      title: 'Roo',
      category: 'Horror',
    },
  ],
};

const store = createStore(generalReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
