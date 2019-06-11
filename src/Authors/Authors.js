import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';

const Authors = () => {
  return (
    <>
      <NavBar />
      <h2>Authors</h2>
    </>
  );
};

const MapStateToProps = () => {
  return {};
};

export default connect(MapStateToProps)(Authors);
