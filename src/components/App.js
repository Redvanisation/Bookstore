import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';

class App extends Component {
  render() {
    return (
      <div>
        {/* <BookForm /> */}
        <BookList />
      </div>
    )
  }
}

export default App;
