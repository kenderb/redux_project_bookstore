import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Select = styled.select`
  width: 180px;
  height: 45px;
  padding: 6px 15px 9px 16px;
  border-radius: 4px;
  border: solid 1px var(--gray-border);
  background-color: var(--white-two);
  &:focus {
    outline: none;
  }
`;
const categoryList = [
  'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const CategoryFilter = ({ onChange }) => (
  <div>
    <Select id="filter" onChange={e => onChange(e.target.value)}>
      {['All', ...categoryList].map(cat => (<option key={cat} value={cat}>{cat}</option>))}
    </Select>
  </div>
);

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
