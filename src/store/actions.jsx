export const localStorageUSer = {
  type: 'LOCALSTORAGE_USER',
  payload: {},
};

export const saveAds = (ads) => {
  return {
    type: 'STORAGE_ADS',
    payload: {
      ads,
    },
  };
};

export const saveUser = (user) => {
  return {
    type: 'SAVE_USER',
    payload: {
      user,
    },
  };
};
