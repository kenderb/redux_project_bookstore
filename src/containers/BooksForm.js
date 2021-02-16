import React, { useState } from 'react';

const categoryList = [
  'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categoryList[0]);

  const handleChange = event => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
      console.log(title);
    } else if (event.target.name === 'categories') {
      setCategory(event.target.value);
      console.log(event.target.value);
    }
  };

  return (
    <form>
      <p>Title</p>
      <input type="text" name="title" onChange={event => handleChange(event)} />
      <p>Category</p>
      <select name="categories" onChange={event => handleChange(event)}>
        {categoryList.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </form>
  );
};

export default BooksForm;
