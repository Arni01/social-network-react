import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { dialogs, dialogsItems, messages } from './Dialogs.module.css';

const Dialogs = ({ data }) => {
  let dialogsElement = data.dialogsData.map(({ name, id }) => (
    <DialogItem key={id} name={name} id={id} />
  ));
  let messagesElement = data.messagesData.map((m) => (
    <Message key={m.id} text={m.text} />
  ));

  return (
    <div className={dialogs}>
      <div className={dialogsItems}>{dialogsElement}</div>
      <div className={messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
