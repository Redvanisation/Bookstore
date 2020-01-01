/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import generalReducer from './reducers/index';
import makeId from './helpers/helpers';
import './style/main.scss';


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
    {
      bookId: makeId(),
      title: 'Gone with the wind',
      category: 'Romance',
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
