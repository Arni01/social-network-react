import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'kek lol', likesCount: 0 },
        { id: 2, message: 'wegsgw sgseg', likesCount: 23 },
        { id: 3, message: 'sghsdrhdrhdrh', likesCount: 5 },
        { id: 4, message: '345345345', likesCount: 0 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
