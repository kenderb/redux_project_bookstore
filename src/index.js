import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/books';

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

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
