import * as TYPES from './types';

export const saveUser = (user) => {
  const actionUser = {
    type: TYPES.SAVE_USER,
    payload: {
      user,
    },
  };
  console.log(actionUser);
  return actionUser;
};

export const localStorageUSer = {
  type: 'LOCALSTORAGE_USER',
  payload: {},
};

export const renderAds = (ads) => {
  return {
    type: 'STORAGE_ADS',
    payload: {
      ads,
    },
  };
};

export const createAds = (ads) => {
  return {
    type: 'CREATE_ADS',
    payload: {
      ads,
    },
  };
};

export const createAdsName = (ads) => {
  return {
    type: 'CREATE_ADS_NAME',
    payload: {
      ads,
    },
  };
};

export const createAdsSell = (ads) => {
  return {
    type: 'CREATE_ADS_SELL',
    payload: {
      ads,
    },
  };
};

export const createAdsTag = (ads) => {
  return {
    type: 'CREATE_ADS_TAG',
    payload: {
      ads,
    },
  };
};

export const createAdsPrice = (ads) => {
  return {
    type: 'CREATE_ADS_PRICE',
    payload: {
      ads,
    },
  };
};

export const createAdsDescription = (ads) => {
  return {
    type: 'CREATE_ADS_DESCRIPTION',
    payload: {
      ads,
    },
  };
};

export const createAdsUrl = (ads) => {
  return {
    type: 'CREATE_ADS_URL',
    payload: {
      ads,
    },
  };
};
