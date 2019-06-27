import * as actionTypes from './actionTypes';

export function getUsersAndPosts() {
  return function(dispatch) {
    getUsers(dispatch);
    getPosts(dispatch);
  };
}

export function linkPostsAndUsers(data, dispatch) {
  let [usersData, postsData] = data;
  postsData = postsData.map(post => {
    return {
      ...post,
      authorUsername: usersData.find(user => user.id === post.userId).username,
    };
  });
  dispatch({
    type: actionTypes.SAVE_POSTS,
    postsData,
  });
  usersData = usersData.map(user => {
    return {
      ...user,
      postsCount: postsData.filter(post => post.userId === user.id).length,
    };
  });
  dispatch({ type: actionTypes.SAVE_USERS, usersData });
}

function getPosts(dispatch) {
  fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json().then(postsData => {
      const postsDataObj = postsData.reduce((prevObj, currValue) => {
        return { ...prevObj, [currValue.id]: currValue };
      }, {});
      dispatch({ type: actionTypes.SAVE_POSTS, postsData: postsDataObj });
    }),
  );
}

function getUsers(dispatch) {
  fetch('https://jsonplaceholder.typicode.com/users').then(response =>
    response.json().then(usersData => {
      const usersDataObj = usersData.reduce((prevObj, currValue) => {
        return { ...prevObj, [currValue.id]: currValue };
      }, {});
      dispatch({ type: actionTypes.SAVE_USERS, usersData: usersDataObj });
    }),
  );
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
