import React from "react";
import { render, waitForElement } from "@testing-library/react";
import IssPage from "./IssPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import { fetchPosition, fetchPeopleData } from "../../utils/apiCalls";
jest.mock("../../utils/apiCalls");

describe("ISS Page", () => {
  it("Should render what we expect", async () => {
    const mockPosition = {
      message: "success",
      iss_position: {
        longitude: "-61.6754",
        latitude: "10.6716"
      },
      timestamp: 1587156872
    };
    const mockPeopleData = {
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

    fetchPosition.mockResolvedValue(mockPosition);
    fetchPeopleData.mockResolvedValueOnce(mockPeopleData);

    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <IssPage />
        </Router>
      </Provider>
    );

    expect(
      getByText("International Space Station Tracking")
    ).toBeInTheDocument();
    const currentLocation = await waitForElement(() =>
      getByText("The ISS is currently over 10.6716 N, -61.6754 W")
    );
    expect(currentLocation).toBeInTheDocument();
    const totalPeople = await waitForElement(() =>
      getByText("There are currently 3 humans in space")
    );
    expect(totalPeople).toBeInTheDocument();
    const person1 = await waitForElement(() => getByText("Chris Cassidy, ISS"));
    expect(person1).toBeInTheDocument();
    const person2 = await waitForElement(() =>
      getByText("Anatoly Ivanishin, ISS")
    );
    expect(person2).toBeInTheDocument();
    const person3 = await waitForElement(() => getByText("Ivan Vagner, ISS"));
    expect(person3).toBeInTheDocument();
  });
});
