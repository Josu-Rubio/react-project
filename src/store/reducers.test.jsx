import reducer from './reducers';
import * as TYPES from './types';
require('jest-localstorage-mock');

describe('reducers', () => {
  describe('user', () => {
    test('Handle ANY action', () => {
      const action = {
        type: TYPES.ANY_ACTION,
      };
      const expectedState = [];
      expect(reducer.user(undefined, action)).toEqual(expectedState);
    });

    test('Hanlde SAVE_USER action', () => {
      const userExample = [];
      const user = [{ user: 'User Example' }];
      const action = {
        type: TYPES.SAVE_USER,
        user,
      };
      const expectedState = user;
      expect(reducer.user(userExample, action)).toEqual(expectedState);
    });

    test('SAVE_USER mocked', () => {
      const user
      expect(Object.keys(localStorage.__STORE__).length).toBe(0);
      expect(localStorage.__STORE__).toBe(undefined);
    });
  });
});
