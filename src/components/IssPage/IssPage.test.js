import React from "react";
import { render } from "@testing-library/react";
import IssPage from "./IssPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("ISS Page", () => {
  it("Should render what we expect", () => {
    const mockPosition = {
      message: "success",
      iss_position: {
        longitude: "-61.6754",
        latitude: "10.6716"
      },
      timestamp: 1587156872
    };
    const mockPeopleDate = {
      number: 3,
      message: "success",
      people: [
        {
          craft: "ISS",
          name: "Chris Cassidy"
        },
        {
          craft: "ISS",
          name: "Anatoly Ivanishin"
        },
        {
          craft: "ISS",
          name: "Ivan Vagner"
        }
      ]
    };
  });
});
