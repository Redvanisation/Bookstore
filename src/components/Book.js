/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.bookId}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
