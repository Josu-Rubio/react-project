import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser } from '../../redux/actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Handler from '../../redux/handleLoginRegister';
// import { register } from '../../API';
import Form from '../form';
import Input from '../input';

const initialFormData = Object.freeze({
  userName: '',
  password: '',
});

const Register = (props) => {
  /*constructor(props) {
    super(props);
    this.state = {
      form: Handler,
    };
  }*/
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
    console.log(formData);

    saveUser(formData);
  };

  return (
    <div className='register'>
      <h2>Let's REGISTER!</h2>
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
      </Form>
      <br />
      <div>
        <Link to='/apiv1/login'>Or Log In Here</Link>
      </div>
    </div>
  );
};

export default connect(null, { saveUser })(Register);
