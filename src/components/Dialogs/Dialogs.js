import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { dialogs, dialogsItems, messages } from './Dialogs.module.css';
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from '../../redux/dialogs-reducer';

const Dialogs = ({ data, dispatch }) => {
  let dialogsElement = data.dialogsData.map(({ name, id }) => (
    <DialogItem key={id} name={name} id={id} />
  ));
  let messagesElement = data.messagesData.map((m) => (
    <Message key={m.id} text={m.message} />
  ));

  const hadnleOnSendMessageClick = () => {
    let action = sendMessageCreator();
    dispatch(action);
  };
  const handleChangeMessageText = ({ target }) => {
    let action = updateNewMessageTextCreator(target.value);
    dispatch(action);
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
