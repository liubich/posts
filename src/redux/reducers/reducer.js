import * as actionTypes from '../actions/actionTypes';

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SAVE_POSTS:
      return { ...state, postsData: action.postsData };
    default:
      return state;
  }
}
