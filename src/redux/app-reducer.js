import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      break;
  }

  return state;
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initialiseApp = () => (dispatch) => {
  dispatch(getAuthUserData()).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
