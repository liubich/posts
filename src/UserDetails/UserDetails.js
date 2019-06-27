import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../redux/actions/actions";

const UserDetails = ({ usersData, match, dispatch }) => {
  useEffect(() => {
    if (!usersData) dispatch(actions.getUsersAndPosts());
  });
  if (usersData) {
    const userId = parseInt(match.params.userId, 10);
    const userDetails = usersData[userId];
    return (
      <>
        <h2 className="text-center">
          {userDetails.name}
          <span className="text-muted"> aka {userDetails.username}</span>
        </h2>
        <div className="card mb-3">
          <div className="card bg-light mb-3">
            <div className="card-header">Contacts:</div>
            <div className="card-body">
              <h5 className="card-title">{userDetails.phone}</h5>
              <p>
                <a href={`mailto:${userDetails.website}`} className="card-link">
                  {userDetails.email}
                </a>
              </p>
              <a
                href={`http://${userDetails.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                {userDetails.website}
              </a>
            </div>
          </div>
          <div className="card bg-light mb-3">
            <div className="card-header">Address:</div>
            <div className="card-body">
              <p className="card-text">
                {`${userDetails.address.city}, ${
                  userDetails.address.street
                  } str., ${userDetails.address.suite}`}
              </p>
              <p className="card-text">{`zip: ${
                userDetails.address.zipcode
                }`}</p>
            </div>
          </div>
          <div className="card bg-light mb-3">
            <div className="card-header">Company</div>
            <div className="card-body">
              <h4 className="card-title">{userDetails.company.name}</h4>
              <p className="card-text">
                {`Catch phrase: ${userDetails.company.catchPhrase}`}
              </p>
              <p className="card-text">{`Business: ${
                userDetails.company.bs
                }`}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else return null;
};

UserDetails.propTypes = {
  match: PropTypes.object,
  usersData: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ usersData }) => {
  return {
    usersData
  };
};

export default connect(mapStateToProps)(UserDetails);
