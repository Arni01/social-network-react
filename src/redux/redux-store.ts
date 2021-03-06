import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import thunkMiddlewere from 'redux-thunk';
import { reducer as fromReducer } from 'redux-form';
import appReducer from './app-reducer';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: fromReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddlewere))
);
//@ts-ignore
window.__store__ = store;

export default store;
