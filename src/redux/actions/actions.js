import * as actionTypes from "./actionTypes";

export function GetPosts() {
  return function(dispatch, getState) {
    GetUsers();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        const postsData = json
          .slice(-10)
          .sort((a, b) => a.id < b.id)
          .map(post => {
            return {
              ...post,
              authorUsername: getState().usersData.find(
                user => (user.id = post.userId)
              ).username,
              authorName: getState().usersData.find(
                user => (user.id = post.userId)
              ).name
            };
          });
        dispatch({
          type: actionTypes.SAVE_POSTS,
          postsData
        });
      });
  };
}

export function GetUsers() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(usersData => {
        dispatch({ type: actionTypes.SAVE_USERS, usersData });
      });
  };
}

export function GetComments(postId) {
  return function(dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(commentsData => {
        dispatch({ type: actionTypes.SAVE_COMMENTS, commentsData });
      });
  };
}
