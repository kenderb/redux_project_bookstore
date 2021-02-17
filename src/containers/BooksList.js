import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Books from '../components/Books';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, changeFilter, removeBook,
}) => {
  const handleRemoveBook = id => {
    removeBook(id);
  };

  const handleFilterChange = vale => {
    changeFilter(vale);
  };

  const filterBooksHelper = () => {
    if (filter !== 'All') return books.filter(book => book.category === filter);
    return books;
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
        <tr>
          <th>
            <CategoryFilter onChange={handleFilterChange} />
          </th>
        </tr>
        {
        filterBooksHelper().map(book => (
          <Books
            id={book.id}
            key={book.id}
            title={book.title}
            onRemoveBook={handleRemoveBook}
            category={book.category}
          />
        ))
        }
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
    filter: state.filter,
  };
}

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
