import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { dialogs, dialogsItems, messages } from './Dialogs.module.css';

const Dialogs = ({ data, updateNewMessageText, sendMessage }) => {
  let dialogsElement = data.dialogsData.map(({ name, id }) => (
    <DialogItem key={id} name={name} id={id} />
  ));
  let messagesElement = data.messagesData.map((m) => (
    <Message key={m.id} text={m.message} />
  ));

  const hadnleOnSendMessageClick = () => {
    sendMessage();
  };
  const handleChangeMessageText = ({ target }) => {
    updateNewMessageText(target.value);
  };

  return (
    <div className={dialogs}>
      <div className={dialogsItems}>{dialogsElement}</div>
      <div className={messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              value={data.newMessageText}
              onChange={handleChangeMessageText}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={hadnleOnSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
