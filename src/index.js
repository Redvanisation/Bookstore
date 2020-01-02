import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import generalReducer from './reducers/index';
import { makeId } from './helpers/helpers';
import Display from './components/Display';
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
  <Display store={store} />,
  document.querySelector('#root'),
);
