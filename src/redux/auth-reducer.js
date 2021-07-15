import { stopSubmit } from 'redux-form';
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
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      break;
  }

  return state;
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.getAuthMe();
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message =
      response.messages.length > 0 ? response.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export default authReducer;
