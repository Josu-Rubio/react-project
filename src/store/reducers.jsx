import { combineReducers } from 'redux';
import * as TYPES from './types';

export const userReducer = (state, action) => {
  const userExample = { user: 'User Example' };
  let updatedState = state;
  if (state === undefined) {
    return userExample;
  }
  switch (action.type) {
    case TYPES.LOCALSTORAGE_USER:
      if (localStorage.getItem('user') !== null) {
        return localStorage.getItem('user');
      }
      return userExample;
    case TYPES.SAVE_USER:
      updatedState = action.payload.user;
      localStorage.setItem('user', updatedState);
      return updatedState;
    default:
      return state;
  }
};

export const adsReducer = (state, action) => {
  const previousList = {};
  let updatedState = state;
  if (state === undefined) {
    return previousList;
  }
  switch (action.type) {
    case TYPES.STORAGE_ADS:
      updatedState = action.payload.ads;
      return updatedState;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  ads: adsReducer,
});
