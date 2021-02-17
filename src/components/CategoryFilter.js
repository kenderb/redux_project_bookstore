import React from 'react';

const categoryList = [
  'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const CategoryFilter = () => (
  <div>
    <label htmlFor="filter">
      Filter Categories
      <select id="filter">
        {[...categoryList, 'All'].map(cat => (<option key={cat} value={cat}>{cat}</option>))}
      </select>
    </label>
  </div>
);

export default CategoryFilter;
