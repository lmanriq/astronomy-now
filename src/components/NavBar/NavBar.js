import React, { Component } from 'react';
import './NavBar.css'
import { connect } from 'react-redux';

class NavBar extends Component {

  render() {
    return(
      <img src="/images/saturn.svg" alt="saturn logo" className="logo"/>
    )
  }
}

export default NavBar;