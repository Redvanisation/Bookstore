/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import makeId from '../helpers/helpers';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = { ...this.state, bookId: makeId() };
    const { createBook } = this.props;
    createBook(book);
  }


  render() {
    const { category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={this.handleChange}
          onBlur={this.handleChange}
        />
        <select name="category" value={category} onChange={this.handleChange} onBlur={this.handleChange}>
          {categories.map(catg => (
            <option
              key={catg}
              value={catg}
              defaultValue
            >
              {catg}
            </option>
          ))}
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: book => dispatch(createBook(book)),
});

BookForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
