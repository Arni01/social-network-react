import React from 'react';
// import { content } from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <main className="App-content">
      <ProfileInfo />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
