import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Books from '../components/Books';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = id => {
    removeBook(id);
  };

  return (
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
              onRemoveBook={handleRemoveBook}
              category={book.category}
            />
        ))}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps, { removeBook })(BooksList);
