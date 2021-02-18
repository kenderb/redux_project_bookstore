import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Books from '../components/Books';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import reactIcon from '../assets/icon.png';
import {
  Navbar, WrapperLeft, Title, Item, WrapperRight, Image,
} from '../components/styled/lib';

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
    <div>
      <div>
        <Navbar>
          <WrapperLeft>
            <Title>Bookstore CMS</Title>
            <Item>books</Item>
            <CategoryFilter onChange={handleFilterChange} />
          </WrapperLeft>
          <WrapperRight>
            <Image src={reactIcon} alt="" />
          </WrapperRight>
        </Navbar>
      </div>
      <div>
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
      </div>
    </div>
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
