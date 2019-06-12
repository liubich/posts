import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/actions';
import NavBar from '../NavBar/NavBar';

const Posts = props => {
  useEffect(() => {
    if (!props.postsData) props.dispatch(actions.GetPosts());
  });
  return (
    <>
      <NavBar />
      {props.postsData
        ? props.postsData.map((item, index) => <p key={index}>{item.title}</p>)
        : null}
    </>
  );
};

Posts.propTypes = {
  dispatch: PropTypes.func,
  postsData: PropTypes.array,
};

const MapStateToProps = state => {
  return {
    postsData: state.postsData,
  };
};

export default connect(MapStateToProps)(Posts);
