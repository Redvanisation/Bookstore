import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="bookItem">
    <div className="bookItem__leftPanel">
      <div className="bookItem__leftPanel--category">{book.category}</div>
      <div className="bookItem__leftPanel--title">{book.title}</div>
    </div>
    <div className="bookItem__removeButton">
      <button className="bookItem__removeButton--button" type="button" onClick={handleRemoveBook}>Remove Book</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;
