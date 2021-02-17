import nanoid from 'nanoid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    id: nanoid(10),
    title: 'Book 1',
    category: 'A',
  },
  {
    id: nanoid(10),
    title: 'Book 2',
    category: 'B',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};
export default bookReducer;
