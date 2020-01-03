import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';

const App = () => (
  <div className="container">
    <BookList />
    <BookForm />
  </div>
);


export default App;
