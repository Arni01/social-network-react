import React from 'react';
import { postsBlock, posts } from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData, addPost, updateNewPostText, newPostText }) => {
  let postsElement = postsData.map(({ message, likesCount, id }) => (
    <Post key={id} message={message} likesCount={likesCount} />
  ));

  let newPostElement = React.createRef();

  const handleChangeText = (value) => {
    updateNewPostText(value);
  };

  const handleAddPost = () => addPost();

  return (
    <div className={postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={({ target }) => {
            handleChangeText(target.value);
          }}
          ref={newPostElement}
          value={newPostText}
        />
        <button onClick={handleAddPost}>Add post</button>
      </div>
      <div className={posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
