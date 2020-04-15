import React, { Component } from 'react';
import './NavBar.css'
import { connect } from 'react-redux';

class NavBar extends Component {

  render() {
    return(
      <header className="flex-container">
        <img src="/images/saturn.svg" alt="saturn logo" className="logo"/>
        <article className="welcome-msg">
          <h1>Astronomy Now</h1>
          <h2>Welcome, Guest</h2>
          <button>login</button>
        </article>
        <nav className="flex-container">
          <div className="nav-btn-container flex-container">
            <button>
              <p>Photos of the Day</p>
            </button>
            <img src="/images/spaceship.svg" alt="spaceship icon"/>
          </div>
          <div className="nav-btn-container flex-container">
            <button>
              <p>ISS Tracking</p>
            </button>
            <img src="/images/iss.svg" alt="ISS icon"/>
          </div>
          <div className="nav-btn-container flex-container">
            <button>
              <p>Hubble News</p>
            </button>
            <img src="/images/hubble.svg" alt="Hubble telescope icon"/>
          </div>
          <div className="nav-btn-container flex-container">
            <button>
              <p>Favorites</p>
            </button>
            <img src="/images/alien.svg" alt="alien with heart eyes icon"/>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;