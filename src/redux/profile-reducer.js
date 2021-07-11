import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postsData: [
    { id: 1, message: 'kek lol', likesCount: 0 },
    { id: 2, message: 'wegsgw sgseg', likesCount: 23 },
    { id: 3, message: 'sghsdrhdrhdrh', likesCount: 5 },
    { id: 4, message: '345345345', likesCount: 0 },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_POST:
      let newId = state.postsData[state.postsData.length - 1].id + 1;
      let newPost = {
        id: newId,
        message: state.newPostText,
        likesCount: 0,
      };
      newState = {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
      break;

    case UPDATE_NEW_POST_TEXT:
      newState = {
        ...state,
        newPostText: action.newText,
      };
      break;

    case SET_USER_PROFILE:
      newState = {
        ...state,
        profile: action.profile,
      };
      break;

    default:
      break;
  }

  return newState || state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((data) => dispatch(setUserProfile(data)));
};

export default profileReducer;
