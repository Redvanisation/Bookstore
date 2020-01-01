/* eslint-disable arrow-parens */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>title</th>
        <th>category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => <Book key={book.bookId} book={book} />)}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.array,
};

export default connect(mapStateToProps)(BookList);
