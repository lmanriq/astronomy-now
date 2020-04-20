import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("ISS Map", () => {
  it("Should render what we expect", () => {
    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    );
    expect(getByText("Created by Lili Manrique")).toBeInTheDocument();
    expect(getByText("Freepik")).toBeInTheDocument();
    expect(getByText("Nhor Phai")).toBeInTheDocument();
    expect(getByText("Darius Dan")).toBeInTheDocument();
    expect(getByText("ultimatearm")).toBeInTheDocument();
    expect(getByText("www.flaticon.com")).toBeInTheDocument();
  });
});
