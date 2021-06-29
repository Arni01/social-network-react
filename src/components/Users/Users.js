import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  // const handleClickFollow = () => {
  //   props.unfollow(u.id)
  // }
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={styles.avatar}>
              <img
                src={
                  u.photos.small ||
                  'https://klike.net/uploads/posts/2019-03/1551512888_2.jpg'
                }
                alt={u.name}
                className={styles.avatarPhoto}
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
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.city }</div> */}
              <div>не указана</div>
              {/* <div>{u.location.country}</div> */}
              <div>не указана</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
