import React from "react";
import "./NavBar.css";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import PropTypes from 'prop-types';

const NavBar = props => {
  if (props.location.pathname === "/login") {
    return null;
  }

  const { user } = props;
  const username = user.name ? user.name : "Guest";
  const loginBtn = (
    <NavLink to="/login" style={{ textDecoration: "none" }}>
      <button>login</button>
    </NavLink>
  );
  const logoutBtn = (
    <NavLink exact to="/" style={{ textDecoration: "none" }}>
      <button onClick={props.logoutUser}>logout</button>
    </NavLink>
  );
  const userFlowBtn = user.name ? logoutBtn : loginBtn;

  return (
    <header className="flex-container">
      <article className="flex-container">
        <img src="/images/saturn.svg" alt="saturn logo" className="logo" />
        <div className="welcome-msg ">
          <h1>Astronomy Now</h1>
          <h2>Welcome, {username}</h2>
          {userFlowBtn}
        </div>
      </article>
      <nav className="flex-container">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          <div className="nav-btn-container flex-container">
            <img src="/images/spaceship.svg" alt="spaceship icon" />
            <button>
              <p>Photos of the Day</p>
            </button>
          </div>
        </NavLink>
        <NavLink
          to="/iss-tracking"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          <div className="nav-btn-container flex-container">
            <img src="/images/iss.svg" alt="ISS icon" />
            <button>
              <p>ISS Tracking</p>
            </button>
          </div>
        </NavLink>
        <NavLink
          to="/hubble-news"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          <div className="nav-btn-container flex-container">
            <img src="/images/hubble.svg" alt="Hubble telescope icon" />
            <button>
              <p>Hubble News</p>
            </button>
          </div>
        </NavLink>
        <NavLink
          to="/favorites"
          activeClassName="active"
          style={{ textDecoration: "none" }}
        >
          <div className="nav-btn-container flex-container">
            <img src="/images/alien.svg" alt="alien with heart eyes icon" />
            <button>
              <p>Favorites</p>
            </button>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

NavBar.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  logoutUser: PropTypes.func
}
