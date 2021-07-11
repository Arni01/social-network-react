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
  let newState;

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessageText = state.newMessageText;
      let newId = state.messagesData[state.messagesData.length - 1].id + 1;
      newState = {
        ...state,
        newMessageText: '',
        messagesData: [
          ...state.messagesData,
          {
            id: newId,
            message: newMessageText,
          },
        ],
      };
      break;

    case UPDATE_NEW_MESSAGE_TEXT:
      newState = { ...state, newMessageText: action.newMessage };
      break;

    default:
      break;
  }

  return newState || state;
};

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const updateNewMessageText = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage,
});

export default dialogsReducer;
