import React, { Component } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 2;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlProfileContainer
);
