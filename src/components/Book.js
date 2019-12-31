import React, { Component } from 'react';

class Book extends Component {
	render() {
		const {bookId, title, category } = this.props.book;
		return (
			<tr>
				<td>{bookId}</td>
				<td>{title}</td>
				<td>{category}</td>
			</tr>
		);
	}
}

export default Book;