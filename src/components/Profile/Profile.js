import React from 'react';
// import { content } from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({ data, addPost, updateNewPostText }) => {
  return (
    <main className="App-content">
      <ProfileInfo />
      <MyPosts
        postsData={data.postsData}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        newPostText={data.newPostText}
      />
    </main>
  );
};

export default Profile;
