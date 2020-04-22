import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const showNav = () => {
    return (
      <Menu mode='horizontal' selectedKeys={window.location.pathname}>
        <Menu.Item key={'/signin'}>
          <NavLink to='/at/signin'>Signin</NavLink>
          {/* <NavLink to='/signin'>{location != '/signup' ? 'signin' : 'signup'}</NavLink> */}
        </Menu.Item>
        <Menu.Item key='/home'>
          <NavLink to='/at/home'>Home</NavLink>
        </Menu.Item>
        <Menu.Item key='/add-check'>
          <NavLink to='/at/add-check'>Add check</NavLink>
        </Menu.Item>
      </Menu>
    );
  };

  return <div>{showNav()}</div>;
};

export default Nav;
