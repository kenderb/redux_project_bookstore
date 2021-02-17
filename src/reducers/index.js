import { combineReducers } from 'redux';
import filterReducer from './filter';
import bookReducer from './books';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

export default rootReducer;
