import React, { Component } from 'react';
import Book from '../components/Book';

class BookList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Book title</th>
            <th>Book category</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default BookList;
