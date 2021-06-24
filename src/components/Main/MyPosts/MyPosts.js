import React from 'react';
import { posts } from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea />
        <button> Add post</button>
      </div>
      <div className={posts}>
        <Post message="kek lol" />
        <Post message="wegsgw sgseg" />
        <Post message="sghsdrhdrhdrh" />
        <Post message="345345345" />
      </div>
    </div>
  );
};

export default MyPosts;
