import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    }
  }

  render() {
    return(
      <form>
        <label>First Name:</label>
        <input type="text" placeholder="your name" value={this.state.name} />
        <label>Email:</label>
        <input type="email" placeholder="email" value={this.state.email} />
      </form>
    )
  }
}

export default LoginForm;