import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  countUsersPage: 10,
  totalUsersCount: 0,
  selectedPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FOLLOW:
      newState = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
      break;
    case UNFOLLOW:
      newState = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
      break;
    case SET_USERS:
      newState = {
        ...state,
        users: action.users,
      };
      break;
    case SET_SELECTED_PAGE:
      newState = {
        ...state,
        selectedPage: action.selectedPage,
      };
      break;
    case SET_TOTAL_USERS_COUNT:
      newState = {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
      break;
    case TOGGLE_IS_FETCHING:
      newState = {
        ...state,
        isFetching: action.isFetching,
      };
      break;
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      newState = {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
      break;
    default:
      break;
  }

  return newState || state;
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setSelectedPage = (selectedPage) => ({
  type: SET_SELECTED_PAGE,
  selectedPage,
});
export const setTotalUsersCounter = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (selectedPage, countUsersPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(selectedPage, countUsersPage).then((data) => {
      dispatch(setTotalUsersCounter(data.totalCount));
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) dispatch(unfollowSuccess(userId));
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) dispatch(followSuccess(userId));
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
