import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

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

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.id,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
export default bookReducer;
