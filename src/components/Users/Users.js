import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({
  selectedPage,
  clickSelectedPage,
  totalUsersCount,
  countUsersPage,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        selectedPage={selectedPage}
        clickSelectedPage={clickSelectedPage}
        totalItemsCount={totalUsersCount}
        countUsersPage={countUsersPage}
      />
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
