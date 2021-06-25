import React from 'react';
// import { content } from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({ data }) => {
  return (
    <main className="App-content">
      <ProfileInfo />
      <MyPosts postsData={data.postsData} />
    </main>
  );
};

export default Profile;
