import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Books from '../components/Books';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import reactIcon from '../assets/icon.png';

const Navbar = styled.div`
  height: 95px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--white-2);
  padding: 10px 100px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: var(--azure);
`;

const WrapperLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`;

const WrapperRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  width: 33px;
  height: 30px;
`;

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
            <a href="/">books</a>
            <CategoryFilter onChange={handleFilterChange} />
          </WrapperLeft>
          <WrapperRight>
            <Image src={reactIcon} alt="" />
          </WrapperRight>
        </Navbar>
        <div>
          <div>Book ID</div>
        </div>
        <div>
          <div>Title</div>
        </div>
        <div>
          <div>Category</div>
        </div>
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
