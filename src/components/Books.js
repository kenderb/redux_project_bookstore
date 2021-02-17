import React from 'react';
import PropTypes from 'prop-types';

const Books = ({
  id, title, category, onRemoveBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button type="button" onClick={() => onRemoveBook(id)}>delete</button>
    </td>
  </tr>
);

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default Books;
