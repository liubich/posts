import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/actions';

const Posts = props => {
  useEffect(() => {
    if (!props.postsData) props.dispatch(actions.GetPosts());
  });
  return (
    <>
      {props.postsData
        ? props.postsData.map((item, index) => (
            <div className="jumbotron" key={index}>
              <h1 className="display-5">{item.title}</h1>
              <hr className="my-4" />
              <p className="lead">{item.body}</p>
              <p className="lead">
                <a
                  className="btn btn-primary btn-lg"
                  href={`/post/${item.id}`}
                  role="button"
                >
                  Comments
                </a>
              </p>
            </div>
          ))
        : null}
    </>
  );
};

Posts.propTypes = {
  dispatch: PropTypes.func,
  postsData: PropTypes.array,
};

const MapStateToProps = state => {
  return {
    postsData: state.postsData,
  };
};

export default connect(MapStateToProps)(Posts);
