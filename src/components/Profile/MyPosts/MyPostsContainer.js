import MyPosts from './MyPosts';
import { addNewPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//   let state = store.getState().profilePage;

//   const handleChangeText = (text) => {
//     let action = updateTextActionCreator(text);
//     store.dispatch(action);
//   };

//   const handleAddPost = () => store.dispatch(addPostActionCreator());

//   return (
//     <MyPosts
//       updateNewPostText={handleChangeText}
//       addNewPost={handleAddPost}
//       newPostText={state.newPostText}
//       postsData={state.postsData}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addNewPost })(MyPosts);

export default MyPostsContainer;
