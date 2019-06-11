import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from './MainPage/MainPage';
import Authors from './Authors/Authors';
import Posts from './Posts/Posts';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/authors" component={Authors} />
      <Route path="/posts" component={Posts} />
    </Router>
  );
};

export default connect()(App);
