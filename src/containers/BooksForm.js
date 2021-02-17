import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { createBook } from '../actions';

const categoryList = [
  'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [id, setID] = useState(nanoid(10));
  const [category, setCategory] = useState(categoryList[0]);
  const fromObj = useRef(null);

  const handleChange = event => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else if (event.target.name === 'categories') {
      setCategory(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setID(nanoid(10));
    if (title) {
      createBook({ id, title, category });
      setTitle('');
      setCategory(categoryList[0]);
      fromObj.current.reset();
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)} ref={fromObj} id="summit-form">
      <p>Title</p>
      <input type="text" name="title" onChange={event => handleChange(event)} />
      <p>Category</p>
      <select name="categories" onChange={event => handleChange(event)} selected={category}>
        {categoryList.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
