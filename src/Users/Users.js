import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/actions';

const Users = props => {
  useEffect(() => {
    if (!props.usersData) props.dispatch(actions.GetUsers());
  });
  return (
    <>
      <NavBar />
      {props.usersData
        ? props.usersData.map((item, index) => (
            <div className="jumbotron" key={index}>
              <h1 className="display-5">{item.username}</h1>
              <hr className="my-4" />
              <p className="lead">{item.name}</p>
            </div>
          ))
        : null}
    </>
  );
};

Users.propTypes = {
  dispatch: PropTypes.func,
  usersData: PropTypes.array,
};

const MapStateToProps = state => {
  return {
    usersData: state.usersData,
  };
};

export default connect(MapStateToProps)(Users);
