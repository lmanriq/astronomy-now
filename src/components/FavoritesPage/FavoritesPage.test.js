import React from "react";
import { render } from "@testing-library/react";
import FavoritesPage from "./FavoritesPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("Favorites Page", () => {
  it("Should render what we expect (no favorites)", () => {
    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <FavoritesPage />
        </Router>
      </Provider>
    );
    expect(getByText("Your Favorites")).toBeInTheDocument();
    expect(
      getByText("You have no favorited articles or photos yet!")
    ).toBeInTheDocument();
  });
});
