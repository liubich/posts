import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/">Main</Link>
        </li>
        <li className="navbar__link">
          <Link to="/authors">Authors</Link>
        </li>
        <li className="navbar__link">
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = () => {
  return {};
};

export default withRouter(connect(mapStateToProps)(NavBar));
