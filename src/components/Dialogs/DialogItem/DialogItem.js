import React from 'react';
import { NavLink } from 'react-router-dom';
import { dialog, active } from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div className={dialog}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
