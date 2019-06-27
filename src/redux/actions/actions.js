import * as actionTypes from "./actionTypes";

export function getUsersAndPosts() {
  return function (dispatch) {
    getUsers(dispatch);
    getPosts(dispatch);
  };
}

export function linkPostsAndUsers(data, dispatch) {
  let [usersData, postsData] = data;
  postsData = postsData.map(post => {
    return {
      ...post,
      authorUsername: usersData.find(user => user.id === post.userId).username
    };
  });
  dispatch({
    type: actionTypes.SAVE_POSTS,
    postsData
  });
  usersData = usersData.map(user => {
    return {
      ...user,
      postsCount: postsData.filter(post => post.userId === user.id).length
    };
  });
  dispatch({ type: actionTypes.SAVE_USERS, usersData });
}

function getPosts(dispatch) {
  fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json().then(postsData => {
      postsDataObj = postsData.reduce((prevObj, currValue) => { return { ...prevObj, [currValue.id]: currValue } }, {});
      dispatch({ type: actionTypes.SAVE_POSTS, postsDataObj });
    })
  );
}

function getUsers(dispatch) {
  fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response.json().then(usersData => {
      usersDataObj = usersData.reduce((prevObj, currValue) => { return { ...prevObj, [currValue.id]: currValue } }, {});
      dispatch({ type: actionTypes.SAVE_USERS, usersDataObj });
    })
  );
}

export function GetComments(postId) {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(commentsData => {
        dispatch({ type: actionTypes.SAVE_COMMENTS, commentsData });
      });
  };
}

export function getLastPosts(postsNumber) {
  return function (dispatch, getState) {
    return Object.values(getState().postsData).sort((a, b) => a.id < b.id).slice(0, postsNumber).map((post) => { return { ...post, authorUsername: getState().postsData.usersData[post.userId].username } });
  }
}