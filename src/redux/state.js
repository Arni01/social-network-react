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
        { id: 1, text: 'Hi' },
        { id: 2, text: 'Hi HI' },
        { id: 3, text: 'РУРупыурп' },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;

export default store;
