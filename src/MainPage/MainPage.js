import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const MainPage = props => {
  useEffect(() => {
    if (!props.postsData) props.dispatch(actions.GetPosts());
  });
  return (
    <>
      {props.postsData
        ? props.postsData.slice(0, 4).map((item, index) => (
            <div className="jumbotron" key={index}>
              <h1 className="display-5">{item.title}</h1>
              <hr className="my-4" />
              <p className="lead">{item.body}</p>
            </div>
          ))
        : null}
    </>
  );
};

const MapStateToProps = state => {
  return {
    postsData: state.postsData,
  };
};

export default connect(MapStateToProps)(MainPage);
