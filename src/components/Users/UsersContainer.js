import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setSelectedPage,
  unfollow,
  getUsers,
} from '../../redux/users-reducer';
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

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.selectedPage, this.props.countUsersPage);
  }

  clickSelectedPage = (pageNumber) => {
    if (pageNumber === this.props.selectedPage) return;
    this.props.setSelectedPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.countUsersPage);
  };

  render() {
    console.log('UsersContainer: 1');

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

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     countUsersPage: state.usersPage.countUsersPage,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     selectedPage: state.usersPage.selectedPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsersState(state),
    countUsersPage: getСountUsersPage(state),
    totalUsersCount: getTotalUsersCount(state),
    selectedPage: getSelectedPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setSelectedPage,
  getUsers,
})(UsersContainer);
