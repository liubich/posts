import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';

const MainPage = () => {
  return (
    <>
      <NavBar />
      <h2>Main page</h2>
    </>
  );
};

const MapStateToProps = () => {
  return {};
};

export default connect(MapStateToProps)(MainPage);
