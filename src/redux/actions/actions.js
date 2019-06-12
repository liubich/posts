import * as actionTypes from './actionTypes';

export function GetPosts() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch({ type: actionTypes.SAVE_POSTS, postsData: json });
      });
  };
}

export function GetUsers() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch({ type: actionTypes.SAVE_USERS, usersData: json });
      });
  };
}
