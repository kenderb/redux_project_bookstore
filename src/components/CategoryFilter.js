import React from 'react';
import PropTypes from 'prop-types';

const categoryList = [
  'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const CategoryFilter = ({ onChange }) => (
  <div>
    <label htmlFor="filter">
      Filter Categories
      <select id="filter" onChange={e => onChange(e.target.value)}>
        {[...categoryList, 'All'].map(cat => (<option key={cat} value={cat}>{cat}</option>))}
      </select>
    </label>
  </div>
);

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
