import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { login } from '../../API';
import Handler from '../../store/handleLoginRegister';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: Handler,
    };
  }

  render() {
    return (
      <div className='log-in'>
        <h2>Let's LOG IN!</h2>
        <this.state.form call={login} />
        Log-In and go to the:
        <button>
          <Link to='/apiv1/anuncios'>Home Page</Link>
        </button>
        <div>
          <p>Still don't have an account?</p>
          <Link to='/apiv1/register'>Register Here!</Link>
        </div>
      </div>
    );
  }
}
