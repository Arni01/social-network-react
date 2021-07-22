import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.match.params.userId || this.props.loginUserId;

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
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
  withRouter,
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withAuthRedirect
)(ProfileContainer);
