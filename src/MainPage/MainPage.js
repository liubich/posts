import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../redux/actions/actions';

const MainPage = ({ postsData, dispatch }) => {
  useEffect(() => {
    if (!postsData) dispatch(actions.getUsersAndPosts());
  });
  return (
    <>
      <h2 className="text-center">
        <strong>Last 5 posts</strong>
      </h2>
      {postsData
        ? postsData.slice(0, 5).map((item, index) => (
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

MainPage.propTypes = {
  postsData: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

const MapStateToProps = state => {
  return {
    postsData: state.postsData,
  };
};

export default connect(MapStateToProps)(MainPage);
