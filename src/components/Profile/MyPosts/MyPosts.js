import React from 'react';
import { postsBlock, posts } from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData }) => {
  let postsElement = postsData.map(({ message, likesCount, id }) => (
    <Post key={id} message={message} likesCount={likesCount} />
  ));

  const handleAddPost = () => {
    console.log('Click');
  };

  return (
    <div className={postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea />
        <button
          onClick={() => {
            handleAddPost();
          }}
        >
          Add post
        </button>
      </div>
      <div className={posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
