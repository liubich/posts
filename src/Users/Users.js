import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../redux/actions/actions";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Users = ({ usersData, dispatch }) => {
  useEffect(() => {
    if (!usersData) dispatch(actions.GetUsers());
  });
  return (
    <>
    <h2 className="text-center"><strong>Active users</strong></h2>
      {usersData
        ? usersData.map((item, index) => (
            <div className="card mb-3" key={index}>
              <h3 className="card-header">
                {item.name}
                <span className="text-muted"> aka {item.username}</span>
              </h3>
              <div className="card-body">
                <h5 className="card-title">{item.phone}</h5>
                <a
                  href={`mailto:${item.email}`}
                  className="card-subtitle text-muted"
                >
                  {item.email}
                </a>
              </div>
              <div className="card-body">
                <Link to={`/user/${item.id}`} className="card-link">
                  User details
                </Link>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

Users.propTypes = {
  dispatch: PropTypes.func,
  usersData: PropTypes.array
};

const MapStateToProps = state => {
  return {
    usersData: state.usersData
  };
};

export default connect(MapStateToProps)(Users);
