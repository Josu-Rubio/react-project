import Routing from '../../routing';
import React, { Component } from 'react';
import { localStorageUSer } from '../../redux/actions';

import { Provider } from 'react-redux';
import store from '../../redux/store';

export default class App extends Component {
  /*componentDidMount() {
    store.dispatch(localStorageUSer);
  }*/
  render() {
    return (
      <div>
        <Provider store={store}>
          <Routing />
        </Provider>
      </div>
    );
  }
}
