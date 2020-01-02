import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { categories } from '../helpers/helpers';

// eslint-disable-next-line react/prefer-stateless-function
class CategoryFilter extends Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ filter: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { handleFilterChange } = this.props;
    const { filter } = this.state;
    handleFilterChange(filter);
  }

  render() {
    const filters = ['All', ...categories()];
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange}>
          {filters.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <input type="submit" value="Filter" />
      </form>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default CategoryFilter;
