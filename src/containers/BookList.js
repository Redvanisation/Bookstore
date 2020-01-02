/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <CategoryFilter />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>category</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <Book
                key={book.bookId}
                book={book}
                handleRemoveBook={() => this.handleRemoveBook(book)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
