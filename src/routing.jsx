import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import LogIn from './components/login';
import Register from './components/register';
import Home from './components/home';
import Detail from './components/detail';
import Create from './components/create';

export default class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/apiv1/login' component={LogIn} />
            <Route path='/apiv1/register' component={Register} />
            <Route exact path='/apiv1/anuncios' component={Home} />
            <Route exact path='/apiv1/anuncios/create' component={Create} />
            <Route path='/apiv1/anuncios/:adId' component={Detail} />
            <Route path='/' component={LogIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}
