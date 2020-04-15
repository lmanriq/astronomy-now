import React, { Component } from 'react';
import './NavBar.css'
import { connect } from 'react-redux';

class NavBar extends Component {

  render() {
    return(
      <header className="flex-container">
        <article className="flex-container">
          <img src="/images/saturn.svg" alt="saturn logo" className="logo"/>
          <div className="welcome-msg ">
            <h1>Astronomy Now</h1>
            <h2>Welcome, Guest</h2>
            <button>login</button>
          </div>
        </article>
        <nav className="flex-container">
          <div className="nav-btn-container flex-container">
            <img src="/images/spaceship.svg" alt="spaceship icon"/>
            <button>
              <p>Photos of the Day</p>
            </button>
          </div>
          <div className="nav-btn-container flex-container">
            <img src="/images/iss.svg" alt="ISS icon"/>
            <button>
              <p>ISS Tracking</p>
            </button>
          </div>
          <div className="nav-btn-container flex-container">
            <img src="/images/hubble.svg" alt="Hubble telescope icon"/>
            <button>
              <p>Hubble News</p>
            </button>
          </div>
          <div className="nav-btn-container flex-container">
            <img src="/images/alien.svg" alt="alien with heart eyes icon"/>
            <button>
              <p>Favorites</p>
            </button>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar;