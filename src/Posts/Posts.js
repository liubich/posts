import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions/actions";

const Posts = ({ postsData, usersData, dispatch }) => {
  useEffect(() => {
    if (!postsData || !usersData) dispatch(actions.getUsersAndPosts());
  }, []);
  const postsNumber = 10;

  return (
    <>
      <h2 className="text-center">{`Last ${postsNumber} posts`}</h2>
      {postsData
        ? actions.getLastPosts(postsNumber).map((item, index) => (
          <div className="jumbotron" key={index}>
            <h6>
              written by @
                <Link
                className="text-monospace text-dark"
                to={`/user/${item.userId}`}
              >
                {item.authorUsername}
              </Link>
            </h6>
            <hr className="my-4" />
            <h5>{item.title}</h5>
            <p className="lead">{item.body}</p>

            <Link
              className="btn btn-primary btn-lg"
              to={`/post/${item.id}`}
              role="button"
            >
              View comments
              </Link>
          </div>
        ))
        : null}
    </>
  );
};

Posts.propTypes = {
  dispatch: PropTypes.func,
  postsData: PropTypes.array
};

const MapStateToProps = state => {
  return {
    postsData: state.postsData
  };
};

export default connect(MapStateToProps)(Posts);
