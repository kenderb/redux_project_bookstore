import React from 'react';

const categoryList = [
  'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <p>Title</p>
    <input type="text" name="title" id="t" />
    <p>Category</p>
    <select name="categories" id="categories">
      {categoryList.map(category => (<option key={category} value={category}>{category}</option>))}
    </select>
  </form>
);

export default BooksForm;
