import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../redux/actions/actions';

const Posts = ({ postsData, usersData, dispatch }) => {
  useEffect(() => {
    if (!postsData || !usersData) dispatch(actions.getUsersAndPosts());
  }, []);

  const postsNumber = 10;

  const getLastPosts = () => {
    return Object.values(postsData)
      .sort((a, b) => a.id < b.id)
      .slice(0, postsNumber)
      .map(post => {
        return {
          ...post,
          authorUsername: usersData[post.userId].username,
        };
      });
  };

  return (
    <>
      <h2 className="text-center">{`Last ${postsNumber} posts`}</h2>
      {postsData
        ? getLastPosts().map((item, index) => (
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
  postsData: PropTypes.object,
  usersData: PropTypes.object,
};

const MapStateToProps = state => {
  return {
    postsData: state.postsData,
    usersData: state.usersData,
  };
};

export default connect(MapStateToProps)(Posts);
