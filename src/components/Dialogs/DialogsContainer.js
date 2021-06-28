import React from 'react';
import Dialogs from './Dialogs';
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from '../../redux/dialogs-reducer';

const DialogsContainer = ({ store }) => {
  let state = store.getState().dialogsPage;

  const hadnleOnSendMessageClick = () => {
    let action = sendMessageCreator();
    store.dispatch(action);
  };
  const handleChangeMessageText = (message) => {
    let action = updateNewMessageTextCreator(message);
    store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewMessageText={handleChangeMessageText}
      sendMessage={hadnleOnSendMessageClick}
      data={state}
    />
  );
};

export default DialogsContainer;
