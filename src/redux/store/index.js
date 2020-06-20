import { createStore } from 'redux';
import reducer from '../reducers';

let userName = '';
let password = '';

const user = window.localStorage.getItem('user');

if (user) {
  const userJson = JSON.parse(user);
  if (userJson && userJson.userName) userName = userJson.userName;
  if (userJson && userJson.password) password = userJson.password;
}

const initialState = {
  user: {
    userName,
    password,
  },
};

const devTools =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : () => {};

export default createStore(reducer, initialState, devTools);
