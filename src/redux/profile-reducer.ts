import { stopSubmit } from 'redux-form';
import { profileAPI, usersAPI } from '../api/api';
import { PhotosType, PostsDataType, ProfileType } from '../types/types';

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
  ] as Array<PostsDataType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: '',
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newId = state.postsData[state.postsData.length - 1].id + 1;
      let newPost = {
        id: newId,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };

    case GET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    case SAVE_PROFILE:
      return {
        ...state,
        profile: { ...state.profile, ...action.profile },
      };

    default:
      return state;
  }
};

type AddNewPostActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addNewPost = (newPostText: string): AddNewPostActionType => ({
  type: ADD_POST,
  newPostText,
});
type SetUserProfileActionType = {
  type: typeof GET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: GET_USER_PROFILE,
  profile,
});
type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO;
  photos: PhotosType;
};
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO,
  photos,
});

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (e) {
    //debugger;
  }
};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const savePhoto = (photo: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(photo);

  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile =
  (formData: ProfileType) => async (dispatch: any, getState: any) => {
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
