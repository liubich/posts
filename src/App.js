import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from './MainPage/MainPage';
import Users from './Users/Users';
import Posts from './Posts/Posts';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
    </Router>
  );
};

export default connect()(App);
