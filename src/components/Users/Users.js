import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  // const handleClickFollow = () => {
  //   props.unfollow(u.id)
  // }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={styles.avatar}>
              <img
                src={u.avatarUrl}
                alt={u.fullName}
                className={styles.avatarFoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
