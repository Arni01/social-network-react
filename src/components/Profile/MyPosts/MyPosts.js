import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { postsBlock, posts } from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElement = props.postsData.map(({ message, likesCount, id }) => (
    <Post key={id} message={message} likesCount={likesCount} />
  ));

  const handleAddNewPost = (values) => {
    props.addNewPost(values.newPostText);
  };

  return (
    <div className={postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostRedux onSubmit={handleAddNewPost} />
      </div>
      <div className={posts}>{postsElement}</div>
    </div>
  );
};

const AddNewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostText" component="textarea" />
      <button>Add post</button>
    </form>
  );
};

const AddNewPostRedux = reduxForm({ form: 'frofileAddNewPostForm' })(
  AddNewPost
);

export default MyPosts;
