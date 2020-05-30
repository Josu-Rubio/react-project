import Routing from '../../routing';
import React, { Component } from 'react';
import { storage } from '../../index';
import { localStorageUSer } from '../../store/actions';

export default class App extends Component {
  componentDidMount() {
    storage.dispatch(localStorageUSer);
  }
  render() {
    return (
      <div>
        <Routing />
      </div>
    );
  }
}
