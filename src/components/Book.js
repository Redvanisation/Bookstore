/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.bookId}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={handleRemoveBook}>Remove Book</button></td>
  </tr>
);

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.object,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;
