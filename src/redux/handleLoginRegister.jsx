import React, { useState } from 'react';
import { storage } from '../index';
import { saveUser } from './actions';

export default function Handler(props) {
  const [user, setUser] = useState('user');
  const [password, setPassword] = useState('password');
  /*const [response, setResponse] = useState('');*/

  function typeUser(event) {
    setUser(event.target.value);
  }
  function typePassword(event) {
    setPassword(event.target.value);
  }

  async function submitAndAlert(event) {
    /*event.preventDefault();
    let response = await props.call(user, password);

    if (response.success === false) {
      setResponse(response.error);
      alert(response.error);
    } else if (response.success === true) {
      storage.dispatch(saveUser(user));
    } else setResponse(`Unknow error. Please try again later.`);*/
  }

  return (
    <form onSubmit={submitAndAlert}>
      <p>
        Insert your User or Email:
        <input user={user} onChange={typeUser} />
      </p>
      <p>
        Insert your Password:
        <input type='password' password={password} onChange={typePassword} />
      </p>
      <button value='Submit'>Submit</button>
    </form>
  );
}
