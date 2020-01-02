import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';

const generalReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

export default generalReducer;
