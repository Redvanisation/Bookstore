import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.bookId}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
