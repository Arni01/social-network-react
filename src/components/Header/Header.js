import React from 'react';
import { header, loginBlock } from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={header}>
      <img src="http://ic.pics.livejournal.com/mi3ch/983718/3671283/3671283_original.jpg" />
      <div className={loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
