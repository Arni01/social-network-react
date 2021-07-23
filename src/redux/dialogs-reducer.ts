const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogsDataType = {
  id: number;
  name: string;
};
type MessagesDataType = {
  id: number;
  message: string;
};

let initialState = {
  dialogsData: [
    { id: 1, name: 'Arni' },
    { id: 2, name: 'Lol' },
    { id: 3, name: 'Kek' },
  ] as Array<DialogsDataType>,
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi HI' },
    { id: 3, message: 'РУРупыурп' },
  ] as Array<MessagesDataType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = action.newMessage;
      let newId = state.messagesData[state.messagesData.length - 1].id + 1;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: newId,
            message: newMessage,
          },
        ],
      };

    default:
      return state;
  }
};

type SendMessageActionType = {
  type: typeof SEND_MESSAGE;
  newMessage: string;
};

export const sendMessage = (newMessage: string): SendMessageActionType => ({
  type: SEND_MESSAGE,
  newMessage,
});

//export const updateNewMessageText = (newMessage) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newMessage,
// });

export default dialogsReducer;
