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
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default connect()(App);
