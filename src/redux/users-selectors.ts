import { AppStateType } from './redux-store';

export const getUsersState = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getСountUsersPage = (state: AppStateType) => {
  return state.usersPage.countUsersPage;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getSelectedPage = (state: AppStateType) => {
  return state.usersPage.selectedPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
