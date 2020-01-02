/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { categories } from '../helpers/helpers';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleFilterChange } = this.props;
    handleFilterChange(e.target.value);
  }

  render() {
    const filters = ['All', ...categories()];
    return (
      <select onChange={this.handleChange}>
        {filters.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default CategoryFilter;
