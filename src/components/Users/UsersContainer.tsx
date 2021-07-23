import React, { Component } from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  getUsersState,
  getСountUsersPage,
  getTotalUsersCount,
  getSelectedPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  selectedPage: number;
  countUsersPage: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
};
type MapDispatchPropsType = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  getUsers: (selectedPage: number, countUsersPage: number) => void;
};
type OwnPropsType = {
  pageTtitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends Component<PropsType> {
  componentDidMount() {
    const { selectedPage, countUsersPage } = this.props;
    this.props.getUsers(selectedPage, countUsersPage);
  }

  clickSelectedPage = (pageNumber: number) => {
    const { selectedPage, countUsersPage } = this.props;
    if (pageNumber === selectedPage) return;
    this.props.getUsers(pageNumber, countUsersPage);
  };

  render() {
    return this.props.isFetching ? (
      <Preloader />
    ) : (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        countUsersPage={this.props.countUsersPage}
        clickSelectedPage={this.clickSelectedPage}
        selectedPage={this.props.selectedPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersState(state),
    countUsersPage: getСountUsersPage(state),
    totalUsersCount: getTotalUsersCount(state),
    selectedPage: getSelectedPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  withRouter,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      getUsers,
    }
  )
)(UsersContainer);
