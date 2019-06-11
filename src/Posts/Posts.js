import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';

const Posts = () => {
  return (
    <>
      <NavBar />
      <h2>Posts</h2>
    </>
  );
};

const MapStateToProps = () => {
  return {};
};

export default connect(MapStateToProps)(Posts);
