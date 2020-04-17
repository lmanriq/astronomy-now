import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("Login Form ", () => {
  it("Should render what we expect", () => {
    const store = createStore(rootReducer);
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    );
    expect(getByText("First Name:")).toBeInTheDocument();
    expect(getByText("Email:")).toBeInTheDocument();
    expect(getByText("login")).toBeInTheDocument();
    expect(getByPlaceholderText("your name")).toBeInTheDocument();
    expect(getByPlaceholderText("email")).toBeInTheDocument();
  });
});
