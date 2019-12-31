import React, { Component } from 'react';
import Book from '../components/Book';

class BookForm extends Component {
  render() {
    return(
      <div>
        <input type="text" placeholder="Book Title"/>
        <select name="category">
          <option value="action" selected>action</option> 
          <option value="biography">biography</option>
          <option value="history">history</option>
          <option value="horror">horror</option>
          <option value="kids">kids</option>
          <option value="learning">learning</option>
          <option value="sci-fi">sci-fi</option>
        </select>
      </div>
    );
  }
}