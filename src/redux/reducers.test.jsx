import userReducer from './reducers';
import * as TYPES from './types';
require('jest-localstorage-mock');

describe('Reducers', () => {
  describe('userReducer', () => {
    test('Testing default', () => {
      const initialUser = {
        user: 'Random',
      };
      const action = {
        type: TYPES.RANDOM_ACTION,
      };
      let newTest = userReducer(initialUser, action);
      expect(newTest).toEqual(initialUser);
    });
    test('Saving user', () => {
      const initialUser = {
        user: 'Random',
      };
      const expectedState = 'user@example';
      const action = {
        type: TYPES.SAVE_USER,
        payload: {
          user: 'user@example',
        },
      };
      let newTest = userReducer(initialUser, action);
      expect(newTest).toEqual(expectedState);
    });
    test('Saving user from localSotrage to Redux', () => {
      const initialUser = {
        user: 'Random',
      };
      const expectedState = 'user@example';
      const action = {
        type: TYPES.LOCALSTORAGE_USER,
      };
      let newTest = userReducer(initialUser, action);
      expect(newTest).toEqual(expectedState);
    });
  });
});
