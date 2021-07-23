import React, { FC } from 'react';
import { UserType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsType = {
  totalUsersCount: number;
  countUsersPage: number;
  selectedPage: number;
  clickSelectedPage: (p: number) => void;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

const Users: FC<PropsType> = ({
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
