import React from "react";
import { render } from "@testing-library/react";
import IssForm from "./IssForm";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("ISS Form", () => {
  it("Should render what we expect", () => {
    const store = createStore(rootReducer);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <IssForm />
        </Router>
      </Provider>
    );
    expect(getByText("When will the ISS pass over me?")).toBeInTheDocument();
    expect(getByText("latitude (-80 to 80):")).toBeInTheDocument();
    expect(getByText("longitude (-180 to 180):")).toBeInTheDocument();
    expect(getByText("search")).toBeInTheDocument();
    expect(getByTestId("lat-input")).toBeInTheDocument();
    expect(getByTestId("lon-input")).toBeInTheDocument();
  });
});
