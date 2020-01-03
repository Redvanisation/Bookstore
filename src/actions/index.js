/* eslint-disable arrow-parens */
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book.bookId,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { createBook, removeBook, changeFilter };
