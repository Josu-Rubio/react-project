import Routing from '../../routing';
import React, { Component } from 'react';
import { storage } from '../../index';
import localStorageUser from '../../store/localstorage'


export default class App extends Component {
  componentDidMount() {
    storage.dispatch(localStorageUser);
  }
  render() {
    return (
      <div>
        <Routing />
      </div >
    );
  }

}

