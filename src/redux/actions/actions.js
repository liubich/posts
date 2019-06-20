import * as actionTypes from './actionTypes';

export function getUsersAndPosts() {
  return function(dispatch) {
    const usersData = getUsers();
    const postsData = getPosts();
    // eslint-disable-next-line no-undef
    Promise.all([usersData, postsData]).then(data =>
      linkPostsAndUsers(data, dispatch),
    );
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

export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();
  });
}

export function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
  });
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
