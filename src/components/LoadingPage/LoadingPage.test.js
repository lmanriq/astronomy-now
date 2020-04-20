import React from "react";
import { render } from "@testing-library/react";
import LoadingPage from "./LoadingPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("ISS Map", () => {
  it("Should render what we expect", () => {
    const store = createStore(rootReducer);
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <LoadingPage />
        </Router>
      </Provider>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
    expect(getByAltText("loading gif")).toBeInTheDocument();
  });
});
