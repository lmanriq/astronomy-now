import React from "react";
import "./LoginPage.css";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
  return(
    <section className="main-page flex-container">
      <section className="logo-container flex-container">
        <h1>Astronomy Now</h1>
        <img src="/images/saturn.svg" alt="saturn logo"/>
      </section>
      <section className="form-container flex-container">
        <h2>Stay in the orbit of what’s happening today in space</h2>
        <LoginForm />
      </section>
    </section>
  )
}

export default LoginPage;