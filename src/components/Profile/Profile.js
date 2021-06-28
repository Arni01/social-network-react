import React from 'react';
// import { content } from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ store }) => {
  return (
    <main className="App-content">
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </main>
  );
};

export default Profile;
