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
      <div className="navbar">
        <h2 className="navbar__title">Bookstore CMS</h2>
        <div className="margin-top navbar__categories-div">
          <h3 className="navbar__categories-div--title2">Books</h3>
          <select className="selection-box" onChange={this.handleChange}>
            {filters.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.instanceOf(Function).isRequired,
};

export default CategoryFilter;
