import React from 'react';
import Books from './Books';

const BooksList = () => {
  const bookList = [{ id: 1, title: 'some', category: 'Action' }];
  return (
    <table>
      <tr>
        <td>id</td>
        <td>title</td>
        <td>category</td>
      </tr>
      {bookList.map(book => (
        <Books
          id={book.id}
          key={book.id}
          title={book.title}
          category={book.category}
        />
      ))}
    </table>
  );
};

export default BooksList;
