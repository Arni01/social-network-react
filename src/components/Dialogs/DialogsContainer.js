import Dialogs from './Dialogs';
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// const DialogsContainer = ({ store }) => {
//   let state = store.getState().dialogsPage;

//   const hadnleOnSendMessageClick = () => {
//     let action = sendMessageCreator();
//     store.dispatch(action);
//   };
//   const handleChangeMessageText = (message) => {
//     let action = updateNewMessageTextCreator(message);
//     store.dispatch(action);
//   };

//   return (
//     <Dialogs
//       updateNewMessageText={handleChangeMessageText}
//       sendMessage={hadnleOnSendMessageClick}
//       data={state}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    data: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (message) => {
      let action = updateNewMessageTextCreator(message);
      dispatch(action);
    },
    sendMessage: () => {
      let action = sendMessageCreator();
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
