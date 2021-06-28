import React from 'react';
import MyPosts from './MyPosts';
import {
  updateTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer';

const MyPostsContainer = ({ store }) => {
  let state = store.getState().profilePage;

  const handleChangeText = (text) => {
    let action = updateTextActionCreator(text);
    store.dispatch(action);
  };

  const handleAddPost = () => store.dispatch(addPostActionCreator());

  return (
    <MyPosts
      updateNewPostText={handleChangeText}
      addNewPost={handleAddPost}
      newPostText={state.newPostText}
      postsData={state.postsData}
    />
  );
};

export default MyPostsContainer;
