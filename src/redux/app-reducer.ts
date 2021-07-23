import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
  initialized: boolean;
};
let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): InitializedSuccess => ({
  type: INITIALIZED_SUCCESS,
});

export const initialiseApp = () => (dispatch: any) => {
  dispatch(getAuthUserData()).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
