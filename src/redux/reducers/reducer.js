import * as actionTypes from '../actions/actionTypes';

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SAVE_POSTS:
      return { ...state, postsData: action.postsData };
    case actionTypes.SAVE_USERS:
      return { ...state, usersData: action.usersData };
    default:
      return state;
  }
}
