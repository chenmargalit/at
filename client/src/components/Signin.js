import React from 'react';
import { NavLink } from 'react-router-dom';
import GenericForm from './GenericForm';
import { signin } from '../actions/usersActions';

const Signin = (props) => {
  console.log('signin working');
  return (
    <div style={{ margin: 30 }}>
      {/* <GenericForm email password action={signin} reDirect={props.history.push} /> */}
      <button onClick={() => props.history.push('/at/home')}>Move</button>
      <h3>
        Dont have an account ? sign up <NavLink to='/at/signup'>Here</NavLink>
      </h3>
    </div>
  );
};

export default Signin;
