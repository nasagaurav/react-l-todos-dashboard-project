import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const intialstate = {
  loggedin: false,
  token: '',
  user: '',
};

function reducer(state = intialstate, action) {
  switch (action.type) {
    case 'logout':
      return state;
    case 'login':
      return state;
    case 'signup':
      return state;
    case 'create-todo':
      return state;
    case 'delete-todo':
      return state;
    case 'update-todo':
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);
function Redux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
export default Redux;
