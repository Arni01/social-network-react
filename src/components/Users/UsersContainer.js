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
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class UsersContainer extends Component {
  componentDidMount() {
    const { selectedPage, countUsersPage } = this.props;
    this.props.getUsers(selectedPage, countUsersPage);
  }

  clickSelectedPage = (pageNumber) => {
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

export default compose(
  withRouter,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setSelectedPage,
    getUsers,
  })
)(UsersContainer);
