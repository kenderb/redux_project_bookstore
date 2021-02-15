import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const initialState = {
  books: [
    {
      id: Math.random() * 10,
      title: 'Book 1',
      category: 'A',
    },
    {
      id: Math.random() * 10,
      title: 'Book 2',
      category: 'B',
    },
  ],
};

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (books, action) => {
      books.push({
        id: lastId += 1,
        name: action.payload.name,
      });
    },
  },
});

export const { bookAdded } = slice.actions;
export default slice.reducer;
