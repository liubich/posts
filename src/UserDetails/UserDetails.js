import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserDetails = props => {
  return <h1>{props.userId}</h1>;
};

UserDetails.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default connect()(UserDetails);
