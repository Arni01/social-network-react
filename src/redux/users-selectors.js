export const getUsersState = (state) => {
  return state.usersPage.users;
};

export const getСountUsersPage = (state) => {
  return state.usersPage.countUsersPage;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getSelectedPage = (state) => {
  return state.usersPage.selectedPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
