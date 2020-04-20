import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  it("should update its input values on change", () => {
    const store = createStore(rootReducer);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
    );
    const nameInput = getByPlaceholderText("your name");
    const emailInput = getByPlaceholderText("email");
    fireEvent.change(nameInput, { target: { value: "Lili" } });
    fireEvent.change(emailInput, { target: { value: "lili@gmail.com" } });
    expect(nameInput.value).toBe("Lili");
    expect(emailInput.value).toBe("lili@gmail.com");
  });
});
