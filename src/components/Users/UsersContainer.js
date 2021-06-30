import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  setSelecedPageAC,
  setTotalUsersCounterAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.countUsersPage}`
      )
      .then((response) => {
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  clickSelectedPage = (pageNumber) => {
    if (pageNumber === this.props.selectedPage) return;
    this.props.setSelectedPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countUsersPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        countUsersPage={this.props.countUsersPage}
        clickSelectedPage={this.clickSelectedPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    countUsersPage: state.usersPage.countUsersPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    selectedPage: state.usersPage.selectedPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      let action = followAC(userId);
      dispatch(action);
    },
    unfollow: (userId) => {
      let action = unfollowAC(userId);
      dispatch(action);
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setSelectedPage: (selectedPage) => {
      dispatch(setSelecedPageAC(selectedPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCounterAC(totalUsersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
