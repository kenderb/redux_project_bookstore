import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './styled/lib';

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
