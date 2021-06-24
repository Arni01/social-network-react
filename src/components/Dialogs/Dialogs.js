import React from 'react';
import {
  dialogs,
  dialogsItems,
  dialog,
  messages,
  message,
  active,
} from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={dialogs}>
      <div className={dialogsItems}>
        <div className={dialog + ' ' + active}>Arni</div>
        <div className={dialog}>Lol</div>
        <div className={dialog}>Kek</div>
      </div>
      <div className={messages}>
        <div className={message}>Hi</div>
        <div className={message}>Hi HI</div>
        <div className={message}>РУРупыурп</div>
      </div>
    </div>
  );
};

export default Dialogs;
