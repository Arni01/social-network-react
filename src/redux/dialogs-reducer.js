const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Arni' },
    { id: 2, name: 'Lol' },
    { id: 3, name: 'Kek' },
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi HI' },
    { id: 3, message: 'РУРупыурп' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let messagesData = state.messagesData;
      let newMessage = {
        id: messagesData[messagesData.length - 1].id + 1,
        message: state.newMessageText,
      };

      state.messagesData.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      break;
    default:
      break;
  }

  return state;
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage,
});

export default dialogsReducer;
