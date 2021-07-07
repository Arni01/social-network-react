import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '14dfed72-a6a2-4af4-850c-82ce785b29c9',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
  getUsers(selectedPage = 1, countUsersPage = 10) {
    return instance
      .get(`users?page=${selectedPage}&count=${countUsersPage}`, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
  followUser(id) {
    return instance.post('follow/' + id, {}).then((r) => r.data);
  },
  unfollowUser(id) {
    return instance.delete('follow/' + id).then((r) => r.data);
  },
};
