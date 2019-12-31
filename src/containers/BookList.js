import React, { Component } from 'react';
import Book from '../components/Book';

class BookList extends Component {
  render() {

    const books = [
      { bookId: 1, title: 'React', category: 'sadomasoquism' },
      { bookId: 2, title: 'Redux', category: 'sadomasoquism' },
      { bookId: 3, title: 'JS', category: 'geography' },

    ]
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          { books.map( (book, idx) => {
              return (
                 <Book book={book} />
              )
            })
          }
        </tbody>
      </table>
    );
  }
}

export default BookList;
