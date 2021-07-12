import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { dialogs, dialogsItems, messages } from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
  let state = props.data;
  let dialogsElement = state.dialogsData.map(({ name, id }) => (
    <DialogItem key={id} name={name} id={id} />
  ));
  let messagesElement = state.messagesData.map((m) => (
    <Message key={m.id} text={m.message} />
  ));

  const handleAddNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  return (
    <div className={dialogs}>
      <div className={dialogsItems}>{dialogsElement}</div>
      <div className={messages}>
        <div>{messagesElement}</div>
        <AddMessageFormRedux onSubmit={handleAddNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          placeholder="Enter your message"
          name="newMessageText"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);

export default Dialogs;
