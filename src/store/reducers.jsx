import { combineReducers } from 'redux';
import * as TYPES from './types';

const userExample = { user: 'User Example' };
export const userReducer = (state, action) => {
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

const previousList = {};
export const adsReducer = (state, action) => {
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

const cleanAd = {
  adBuilder: {
    name: null,
    sell: 'sell',
    tag: 'lifestyle ',
    price: null,
    description: null,
    url: null,
  },
  finalAd: {},
};
export const createReducer = (state, action) => {
  let updatedState = state;
  if (state === undefined) {
    return cleanAd;
  }
  switch (action.type) {
    case TYPES.CREATE_ADS:
      updatedState.finalAd = action.payload.ads;
      return updatedState;
    case TYPES.CREATE_ADS_NAME:
      updatedState.adBuilder.name = action.payload.ads;
      return updatedState;
    case TYPES.CREATE_ADS_SELL:
      updatedState.adBuilder.sell = action.payload.ads;
      return updatedState;
    case TYPES.CREATE_ADS_TAG:
      updatedState.adBuilder.tag = action.payload.ads;
      return updatedState;
    case TYPES.CREATE_ADS_PRICE:
      updatedState.adBuilder.price = action.payload.ads;
      return updatedState;
    case TYPES.CREATE_ADS_DESCRIPTION:
      updatedState.adBuilder.description = action.payload.ads;
      return updatedState;
    case TYPES.CREATE_ADS_URL:
      updatedState.adBuilder.url = action.payload.ads;
      return updatedState;

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  renderAds: adsReducer,
  createAds: createReducer,
});
