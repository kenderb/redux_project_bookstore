import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Books from '../components/Books';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
      </tr>
      <tr>
        <th>Title</th>
      </tr>
      <tr>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Books
          id={book.id}
          key={book.id}
          title={book.title}
          category={book.category}
        />
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BooksList);
