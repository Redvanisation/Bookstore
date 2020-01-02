import { combineReducers } from 'redux';
import bookReducer from './book';

const generalReducer = combineReducers({
  books: bookReducer,
});

export default generalReducer;
