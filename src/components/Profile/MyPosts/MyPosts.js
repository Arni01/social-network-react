import React from 'react';
import { postsBlock, posts } from './MyPosts.module.css';
import Post from './Post/Post';
import {
  updateTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer';

const MyPosts = ({ postsData, dispatch, newPostText }) => {
  let postsElement = postsData.map(({ message, likesCount, id }) => (
    <Post key={id} message={message} likesCount={likesCount} />
  ));

  let newPostElement = React.createRef();

  const handleChangeText = () => {
    let text = newPostElement.current.value;
    let action = updateTextActionCreator(text);
    dispatch(action);
  };

  const handleAddPost = () => dispatch(addPostActionCreator());

  return (
    <div className={postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={handleChangeText}
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
