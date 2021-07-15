import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow, ...props }) => {
  return (
    <div>
      <span>
        <div className={styles.avatar}>
          <NavLink to={'/profile/' + user.id}>
            <img
              src={
                user.photos.small ||
                'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg'
              }
              alt={user.name}
              className={styles.avatarPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          {/* <div>{u.location.city }</div> */}
          <div>не указана</div>
          {/* <div>{u.location.country}</div> */}
          <div>не указана</div>
        </span>
      </span>
    </div>
  );
};

export default User;
