import React from 'react';
import { message } from './Message.module.css';

const Message = (props) => {
  return <div className={message}>{props.text}</div>;
};

export default Message;
