import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import { Wrapper } from './styled/lib';

const App = () => (
  <Wrapper>
    <BooksList />
    <BooksForm />
  </Wrapper>
);

export default App;
