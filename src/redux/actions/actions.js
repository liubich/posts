import * as actionTypes from "./actionTypes";
import { arrayToObjectWithIndex } from "./helpers";

export function getUsersAndPosts() {
  return function(dispatch) {
    getUsers(dispatch);
    getPosts(dispatch);
  };
}

function getPosts(dispatch) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(arrayToObjectWithIndex)
    .then(postsDataObj =>
      dispatch({ type: actionTypes.SAVE_POSTS, postsData: postsDataObj }),
    );
}

function getUsers(dispatch) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(arrayToObjectWithIndex)
    .then(usersDataObj =>
      dispatch({ type: actionTypes.SAVE_USERS, usersData: usersDataObj }),
    );
}

export function getComments(postId) {
  return function(dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(commentsData => {
        dispatch({ type: actionTypes.SAVE_COMMENTS, commentsData });
      });
  };
}
