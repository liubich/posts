import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from './MainPage/MainPage';
import Users from './Users/Users';
import UsersDetails from './UserDetails/UserDetails';
import Posts from './Posts/Posts';
import NavBar from './NavBar/NavBar';
import PageNotFound from './PageNotFound/PageNotFound';
import PostComments from './PostComments/PostComments';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/user/:userId" component={UsersDetails} />
            <Route path="/users" component={Users} />
            <Route path="/post/:postId" component={PostComments} />
            <Route path="/posts" component={Posts} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default connect()(App);
