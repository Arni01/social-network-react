import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.loginUserId;

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loginUserId: state.auth.id,
});

// let WithUrlProfileContainer = withRouter(ProfileContainer);

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);
