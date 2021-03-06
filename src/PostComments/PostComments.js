import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as actions from '../redux/actions/actions';

const PostsComments = ({ postsData, commentsData, match, dispatch }) => {
  const postId = parseInt(match.params.postId, 10);
  useEffect(() => {
    if (!postsData) dispatch(actions.getUsersAndPosts());
    if (!commentsData || commentsData[0].postId !== postId)
      dispatch(actions.getComments(postId));
  });

  if (postsData) {
    const postData = postsData[postId];
    if (postData) {
      return (
        <>
          <h2>
            Post <span className="badge badge-secondary">#{postId}</span>
          </h2>
          <div className="jumbotron">
            <h1 className="display-5">{postData.title}</h1>
            <hr className="my-4" />
            <p className="lead">{postData.body}</p>
          </div>
          <p className="lead">Comments</p>
          {commentsData && commentsData[0].postId === postId ? (
            <>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Text</th>
                  </tr>
                </thead>
                <tbody>
                  {commentsData.map(item => (
                    <tr className="table-light" key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                      </td>
                      <td>{item.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : null}
        </>
      );
    } else return <PageNotFound />;
  } else return null;
};

PostsComments.propTypes = {
  commentsData: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  postsData: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    commentsData: state.commentsData,
    postsData: state.postsData,
  };
};

export default connect(mapStateToProps)(PostsComments);
