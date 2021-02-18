import React from 'react';
import styled from 'styled-components';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const Wrapper = styled.section`
  max-width: 1400px;
  display: block;
  width: 90%;
  background-color: #fff;
  height: auto;
  margin: 50px auto;
  border-radius: 4px;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--white);
`;

const App = () => (
  <Wrapper>
    <BooksList />
    <BooksForm />
  </Wrapper>
);

export default App;
