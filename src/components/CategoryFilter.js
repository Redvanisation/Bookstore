import React, { Component } from 'react';
import { categories } from '../helpers/helpers';

// eslint-disable-next-line react/prefer-stateless-function
class CategoryFilter extends Component {
  render() {
    const filters = ['All', ...categories()];
    return (
      <select>
        {filters.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    );
  }
}

export default CategoryFilter;
