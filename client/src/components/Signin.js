import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from './GenericForm';
import { signin } from '../actions/usersActions';
import axios from 'axios';

const Signin = (props) => {
  const [data, setData] = useState('');
  console.log('signin working');
  const check = async () => {
    const res = await axios.get('http://localhost:5000/users/test');
    console.log('res.data', res.data);
    setData(res.data);
  };
  return (
    <div style={{ margin: 30 }}>
      {/* <GenericForm email password action={signin} reDirect={props.history.push} /> */}

      <button onClick={() => check()}>Check</button>
      {data && data.length > 0 && <h1>{data}</h1>}
      <h3>
        Dont have an account ? sign up <NavLink to='/at/signup'>Here</NavLink>
      </h3>
    </div>
  );
};

export default Signin;
