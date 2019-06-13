import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/actions';

const Users = props => {
  useEffect(() => {
    if (!props.usersData) props.dispatch(actions.GetUsers());
  });
  return (
    <>
      {props.usersData
        ? props.usersData.map((item, index) => (
            <div className="card mb-3" key={index}>
              <h3 className="card-header">
                {item.name}{' '}
                <span className="text-muted">aka {item.username}</span>
              </h3>
              <div className="card-body">
                <h5 className="card-title">{item.phone}</h5>
                {/* <hr className="my-4" /> */}
                <h6 className="card-subtitle text-muted">{item.email}</h6>
              </div>
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
