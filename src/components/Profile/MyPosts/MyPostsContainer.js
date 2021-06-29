import MyPosts from './MyPosts';
import {
  updateTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer';
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

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
