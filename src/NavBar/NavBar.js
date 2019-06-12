import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav d-flex flex-row">
        <li className="nav-item p-2">
          <Link to="/" className="nav-link">
            Main
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = () => {
  return {};
};

export default withRouter(connect(mapStateToProps)(NavBar));
