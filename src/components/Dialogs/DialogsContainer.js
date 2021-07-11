import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    data: state.dialogsPage,
  };
};

let mapDispatchToProps = {
  updateNewMessageText,
  sendMessage,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
