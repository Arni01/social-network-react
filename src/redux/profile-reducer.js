/* eslint-disable default-case */
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'kek lol', likesCount: 0 },
    { id: 2, message: 'wegsgw sgseg', likesCount: 23 },
    { id: 3, message: 'sghsdrhdrhdrh', likesCount: 5 },
    { id: 4, message: '345345345', likesCount: 0 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      state.postsData.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    default:
      break;
  }

  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

export default profileReducer;
