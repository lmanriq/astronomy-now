import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import IssForm from "./IssForm";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import { fetchPasstimes } from "../../utils/apiCalls";
jest.mock("../../utils/apiCalls")

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

  it("Should load passover times when lat/lon are valid", async () => {
    const store = createStore(rootReducer);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <IssForm />
        </Router>
      </Provider>
    );
    const mockPassover = {
      message: "success",
      request: {
        altitude: 100,
        datetime: 1587153841,
        latitude: 7,
        longitude: 80,
        passes: 5
      },
      response: [
        {
          duration: 516,
          risetime: 1587165186
        },
        {
          duration: 621,
          risetime: 1587170929
        },
        {
          duration: 615,
          risetime: 1587206735
        },
        {
          duration: 522,
          risetime: 1587212578
        },
        {
          duration: 345,
          risetime: 1587248845
        }
      ]
    };
    fetchPasstimes.mockResolvedValueOnce(mockPassover);
    const searchBtn = getByText("search");
    const lat = getByTestId("lat-input");
    const lon = getByTestId("lon-input");
    fireEvent.change(lat, { target: { value: "7" } });
    fireEvent.change(lon, { target: { value: "80" } });
    fireEvent.click(searchBtn);
    expect(await waitForElement(() => getByText('April 17, 2020 5:13 PM'))).toBeInTheDocument();
    expect(await waitForElement(() => getByText('April 17, 2020 6:48 PM'))).toBeInTheDocument();
    expect(await waitForElement(() => getByText('April 18, 2020 4:45 AM'))).toBeInTheDocument();
    expect(await waitForElement(() => getByText('April 18, 2020 6:22 AM'))).toBeInTheDocument();
    expect(await waitForElement(() => getByText('April 18, 2020 4:27 PM'))).toBeInTheDocument();
  });
});
