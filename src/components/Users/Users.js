import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  let pagesSize = Math.ceil(props.totalUsersCount / props.countUsersPage);
  let pagesList = [];

  for (let i = 1; i <= pagesSize; i++) {
    pagesList.push(i);
  }

  return (
    <div>
      <div>
        {pagesList.map((p, index) => {
          return (
            <span
              key={index}
              className={props.selectedPage === p ? styles.selectedPage : ''}
              onClick={() => {
                props.clickSelectedPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
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
