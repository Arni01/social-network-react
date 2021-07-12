import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'kek lol', likesCount: 0 },
    { id: 2, message: 'wegsgw sgseg', likesCount: 23 },
    { id: 3, message: 'sghsdrhdrhdrh', likesCount: 5 },
    { id: 4, message: '345345345', likesCount: 0 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_POST:
      let newId = state.postsData[state.postsData.length - 1].id + 1;
      let newPost = {
        id: newId,
        message: action.newPostText,
        likesCount: 0,
      };
      newState = {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
      break;

    case GET_USER_PROFILE:
      newState = {
        ...state,
        profile: action.profile,
      };
      break;
    case SET_STATUS:
      newState = {
        ...state,
        status: action.status,
      };
      break;

    default:
      break;
  }

  return newState || state;
};

export const addNewPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({
  type: GET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((data) => dispatch(setUserProfile(data)));
};
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => dispatch(setStatus(data)));
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) dispatch(setStatus(status));
  });
};

export default profileReducer;
