import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Handler from '../../store/handleLoginRegister';
import { register } from '../../API';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: Handler,
    };
  }

  render() {
    return (
      <div className='register'>
        <h2>Let's REGISTER!</h2>
        <this.state.form call={register} />
        <br />
        <div>
          <Link to='/apiv1/login'>Or Log In Here</Link>
        </div>
      </div>
    );
  }
}
