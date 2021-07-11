import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { dialogs, dialogsItems, messages } from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.data;
  let dialogsElement = state.dialogsData.map(({ name, id }) => (
    <DialogItem key={id} name={name} id={id} />
  ));
  let messagesElement = state.messagesData.map((m) => (
    <Message key={m.id} text={m.message} />
  ));

  const hadnleOnSendMessageClick = () => {
    props.sendMessage();
  };
  const handleChangeMessageText = ({ target }) => {
    props.updateNewMessageText(target.value);
  };

  return (
    <div className={dialogs}>
      <div className={dialogsItems}>{dialogsElement}</div>
      <div className={messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              value={state.newMessageText}
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
