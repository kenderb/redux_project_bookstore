import React from 'react';
import PropTypes from 'prop-types';

const Books = props => {
  const { book } = props;

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
};

Books.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

export default Books;
