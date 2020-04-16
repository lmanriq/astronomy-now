import React, { Component } from "react";
import "./LoginForm.css";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { NavLink } from "react-router-dom";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submitLogin() {
    this.props.loginUser(this.state);
  }

  render() {
    const disabled = !this.state.name || !this.state.email;
    return(
      <form className="flex-container">
        <label>First Name:</label>
        <input name="name" type="text" placeholder="your name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        <label>Email:</label>
        <input name="email" type="email" placeholder="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
        <NavLink exact to="/">
          <button type="button" onClick={this.submitLogin()} disabled={disabled}>login</button>
        </NavLink>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);