import { stopSubmit } from 'redux-form';
import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';

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
    case SAVE_PHOTO:
      newState = {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
      break;
    case SAVE_PROFILE:
      newState = {
        ...state,
        profile: { ...state.profile, ...action.profile },
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
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) dispatch(setStatus(status));
};

const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO, photos });

export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo);

  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (formData) => async (dispatch, getState) => {
  const response = await profileAPI.saveProfile(formData);
  const userId = getState().auth.id;

  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let message =
      response.messages.length > 0 ? response.messages[0] : 'Some error';
    dispatch(stopSubmit('edit-profile', { _error: message }));
    return Promise.reject(message);
  }
};

export default profileReducer;
