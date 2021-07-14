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
      .get(`users?page=${selectedPage}&count=${countUsersPage}`)
      .then((r) => r.data);
  },
  followUser(id) {
    return instance.post('follow/' + id, {}).then((r) => r.data);
  },
  unfollowUser(id) {
    return instance.delete('follow/' + id).then((r) => r.data);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object.');
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId).then((r) => r.data);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId).then((r) => r.data);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status }).then((r) => r.data);
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post('auth/login', { email, password, rememberMe })
      .then((r) => r.data);
  },
  logout() {
    return instance.delete('auth/login');
  },
};
