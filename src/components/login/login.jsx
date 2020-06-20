import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser } from '../../redux/actions';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
// import { login } from '../../API';
// import Handler from '../../redux/handleLoginRegister';
import Form from '../form';
import Input from '../input';

const initialFormData = Object.freeze({
  userName: '',
  password: '',
});

const LogIn = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     form: Handler,
  //   };
  // }
  const [formData, updateFormData] = React.useState(initialFormData);
  const saveUser = props.saveUser;

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(formData);
  };

  return (
    <div className='log-in'>
      <h2>Let's LOG IN!</h2>
      <Form
        initialValues={{ userName: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Input
          label='Insert your User or Email'
          type='text'
          name='userName'
          onChange={handleChange}
        />
        <Input
          label='Insert your Password'
          type='password'
          name='password'
          onChange={handleChange}
        />
      </Form>{' '}
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
};
export default connect(null, { saveUser })(LogIn);
