import React from 'react';
// import { content } from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <main className="App-content">
      <div>
        <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
