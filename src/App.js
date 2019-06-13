import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from './MainPage/MainPage';
import Users from './Users/Users';
import Posts from './Posts/Posts';
import NavBar from './NavBar/NavBar';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/users" component={Users} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </Router>
    </>
  );
};

export default connect()(App);
