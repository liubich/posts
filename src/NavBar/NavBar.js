import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-primary">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link">
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(NavBar);
