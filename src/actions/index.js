export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});
