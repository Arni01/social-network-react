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
};

const dialogsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = action.newMessage;
      let newId = state.messagesData[state.messagesData.length - 1].id + 1;
      newState = {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: newId,
            message: newMessage,
          },
        ],
      };
      break;

    default:
      break;
  }

  return newState || state;
};

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

//export const updateNewMessageText = (newMessage) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newMessage,
// });

export default dialogsReducer;
