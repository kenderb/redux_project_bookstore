import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { createBook } from '../actions';
import {
  Form, FormBookTitle, FormWrapper, FormSelect, FormInput, FormButton,
} from '../components/styled/lib';

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
    <Form onSubmit={e => handleSubmit(e)} ref={fromObj} id="summit-form">
      <FormBookTitle>Add new Book</FormBookTitle>
      <FormWrapper>
        <FormInput
          type="text"
          name="title"
          onChange={event => handleChange(event)}
          placeholder="Book title"
        />
        <FormSelect name="categories" onChange={event => handleChange(event)} selected={category}>
          {categoryList.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </FormSelect>
        <FormButton type="submit" onClick={event => handleSubmit(event)}>add book</FormButton>
      </FormWrapper>
    </Form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
