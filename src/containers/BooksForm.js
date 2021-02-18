import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import styled from 'styled-components';
import { createBook } from '../actions';
import { UpdateButton } from '../components/Books';

const Form = styled.form`
  padding: 60px 100px;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--gray-border);
    margin-bottom: 40px;
  }
`;

const BookTitle = styled.h3`
  opacity: 0.5;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black-two);
  font-size: 16px;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 60%;
  height: 45px;
  padding: 6px 15px 9px 16px;
  border-radius: 4px;
  border: solid 1px var(--gray-border);
  background-color: var(--white-two);
  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  width: 230px;
  height: 45px;
  padding: 6px 15px 9px 16px;
  border-radius: 4px;
  border: solid 1px var(--gray-border);
  background-color: var(--white-two);
  &:focus {
    outline: none;
  }
`;

const Button = styled(UpdateButton)`
  font-family: Montserrat, sans-serif;
  height: 45px;
  padding: 6px 15px 9px 16px;
  margin-top: 0;
  font-weight: 400;
`;

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
      <BookTitle>Add new Book</BookTitle>
      <Wrapper>
        <Input
          type="text"
          name="title"
          onChange={event => handleChange(event)}
          placeholder="Book title"
        />
        <Select name="categories" onChange={event => handleChange(event)} selected={category}>
          {categoryList.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
        <Button type="submit" onClick={event => handleSubmit(event)}>add book</Button>
      </Wrapper>
    </Form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
