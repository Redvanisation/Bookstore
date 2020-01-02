/* eslint-disable arrow-parens */
import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BookForm = () => (
  <form>
    <input type="text" placeholder="Book Title" />
    <select name="category">
      {categories.map(category => (
        <option
          key={category}
          value={category}
          defaultValue
        >
          {category}
        </option>
      ))}
    </select>
    <input type="submit" value="submit" />
  </form>
);

export default BookForm;
