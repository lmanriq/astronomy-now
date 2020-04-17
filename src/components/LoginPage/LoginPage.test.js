import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("Login Page", () => {
  it("Should render what we expect", () => {
    const store = createStore(rootReducer);
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );
    expect(getByText("Astronomy")).toBeInTheDocument();
    expect(getByText("Now")).toBeInTheDocument();
    expect(getByAltText("saturn logo")).toBeInTheDocument();
    expect(
      getByText("Stay in the orbit of what’s happening today in space")
    ).toBeInTheDocument();
  });
});
