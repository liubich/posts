import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserDetails = props => {
  return <h1>{props.match.params.userId}</h1>;
};

UserDetails.propTypes = {
  match: PropTypes.object,
};

export default connect()(UserDetails);
