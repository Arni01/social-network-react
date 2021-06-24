import React from 'react';
import { NavLink } from 'react-router-dom';
import { nav, item, active } from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={nav}>
      <ul>
        <li className={item}>
          <NavLink to="/profile" activeClassName={active}>
            Profile
          </NavLink>
        </li>
        <li className={item}>
          <NavLink to="/dialogs" activeClassName={active}>
            Messages
          </NavLink>
        </li>
        <li className={item}>
          <NavLink to="/news" activeClassName={active}>
            News
          </NavLink>
        </li>
        <li className={item}>
          <NavLink to="/music" activeClassName={active}>
            Music
          </NavLink>
        </li>
        <li className={item}>
          <NavLink to="/settings" activeClassName={active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
