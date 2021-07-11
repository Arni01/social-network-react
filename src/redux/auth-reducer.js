import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER_DATA:
      newState = {
        ...state,
        ...action.data,
        isAuth: true,
      };
      break;
    default:
      break;
  }

  return newState || state;
};

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });

export const getAuthUserData = () => (dispatch) => {
  authAPI.getAuthMe().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data));
    }
  });
};
export default authReducer;
