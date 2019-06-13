import React from 'react';
import { connect } from 'react-redux';

const MainPage = () => {
  return <h2>Main page</h2>;
};

const MapStateToProps = () => {
  return {};
};

export default connect(MapStateToProps)(MainPage);
