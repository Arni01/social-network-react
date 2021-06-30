const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  users: [],
  countUsersPage: 10,
  totalUsersCount: 0,
  selectedPage: 1,
  isFetching: false,
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
    default:
      break;
  }

  return newState || state;
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setSelecedPageAC = (selectedPage) => ({
  type: SET_SELECTED_PAGE,
  selectedPage,
});
export const setTotalUsersCounterAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default usersReducer;
