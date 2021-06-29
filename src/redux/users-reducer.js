const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {
    //   id: 1,
    //   avatarUrl: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg',
    //   followed: false,
    //   fullName: 'Dmitry',
    //   status: 'I am a boss',
    //   location: { city: 'Minsk', country: 'Belarus' },
    // },
    // {
    //   id: 2,
    //   avatarUrl: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg',
    //   followed: true,
    //   fullName: 'kek',
    //   status: 'I am a afagage',
    //   location: { city: 'Lida', country: 'Belarus' },
    // },
    // {
    //   id: 3,
    //   avatarUrl: 'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg',
    //   followed: false,
    //   fullName: 'lol',
    //   status: 'I am a aafaf',
    //   location: { city: 'Moscow', country: 'Russia' },
    // },
  ],
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
        users: [...state.users, ...action.users],
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

export default usersReducer;
