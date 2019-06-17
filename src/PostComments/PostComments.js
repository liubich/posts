import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../redux/actions/actions';

const PostsComments = props => {
  const postId = parseInt(props.match.params.postId, 10);
  useEffect(() => {
    if (!props.postsData) props.dispatch(actions.GetPosts());
    if (!props.commentsData) props.dispatch(actions.GetComments(postId));
  });

  if (props.postsData) {
    const postData = props.postsData.filter(a => a.id === postId)[0];

    return (
      <>
        <div className="jumbotron">
          <h1 className="display-5">{postData.title}</h1>
          <hr className="my-4" />
          <p className="lead">{postData.body}</p>
        </div>
        {props.commentsData ? (
          <>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Text</th>
                </tr>
              </thead>
              <tbody>
                {props.commentsData.map(item => (
                  <tr className="table-active" key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : null}
      </>
    );
  } else return null;
};

PostsComments.propTypes = {
  commentsData: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  postsData: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    commentsData: state.commentsData,
    postsData: state.postsData,
  };
};

export default connect(mapStateToProps)(PostsComments);
