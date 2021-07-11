import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 2;

    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

// let WithUrlProfileContainer = withRouter(ProfileContainer);

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer);
