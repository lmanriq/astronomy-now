import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("Nav Bar", () => {
  it("Should render what we expect", () => {
    const store = createStore(rootReducer);
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );
    expect(getByText("Astronomy Now")).toBeInTheDocument();
    expect(getByText("Welcome, Guest")).toBeInTheDocument();
    expect(getByText("login")).toBeInTheDocument();
    expect(getByText("Photos of the Day")).toBeInTheDocument();
    expect(getByText("ISS Tracking")).toBeInTheDocument();
    expect(getByText("Hubble News")).toBeInTheDocument();
    expect(getByText("Favorites")).toBeInTheDocument();
    expect(getByAltText("saturn logo")).toBeInTheDocument();
    expect(getByAltText("spaceship icon")).toBeInTheDocument();
    expect(getByAltText("ISS icon")).toBeInTheDocument();
    expect(getByAltText("Hubble telescope icon")).toBeInTheDocument();
    expect(getByAltText("alien with heart eyes icon")).toBeInTheDocument();
  });
});
