import * as actions from './actions';
import * as TYPES from './types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const history = {
  push: jest.fn(),
};

const middlewares = [thunk.withExtraArgument({ history })];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('actions', () => {
  describe('createAdsName', () => {
    test('Create one CREATE_ADS_NAME', () => {
      const name = 'New Name';
      const expectedAction = {
        type: 'CREATE_ADS_NAME',
        payload: {
          ads: name,
        },
      };
      expect(actions.createAdsName(name)).toEqual(expectedAction);
    });

    test('Dispatch action', () => {
      const expectedAction = {
        type: 'STORAGE_ADS',
        payload: {
          ads: undefined,
        },
      };

      expect(actions.renderAds()).toEqual(expectedAction);
    });
  });
});
