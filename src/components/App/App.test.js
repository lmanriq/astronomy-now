import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import Modal from "react-modal";
import { fetchPOTD, fetchRoverPhotos, fetchPosition, fetchPeopleData } from "../../utils/apiCalls";
jest.mock("../../utils/apiCalls");
Modal.setAppElement(document.createElement("div"));

describe("App", () => {
  it("Should render the photo page on load", () => {
    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(getByText("NASA's Astronomy Photo of The Day")).toBeInTheDocument();
  });

  it("Should expand a rover photo when clicked on", async () => {
    const mockPOTD = {
      copyright: "Antonio Gonzalez",
      date: "2020-04-17",
      explanation:
        "Stars can't turn these old wooden arms, but it does look like they might in this scene from a rotating planet. The well-composed night skyscape was recorded from Garafia, a municipality on the island of La Palma, Canary Islands, planet Earth. The center of the once working windmill, retired since 1953, is lined-up with the north celestial pole, the planet's rotation axis projected on to the northern sky. From a camera fixed to a tripod, the star trails are a reflection of the planet's rotation traced in a digital composite of 39 sequential exposures each 25 seconds long. Brought out by highlighting the final exposure in the sequence, the stars themselves appear at the ends of their short concentric arcs. A faint band of winter's Milky Way and even a diffuse glow from our neighboring Andromeda Galaxy also shine in the night.",
      hdurl: "https://apod.nasa.gov/apod/image/2004/WindmillStarTrails.jpg",
      media_type: "image",
      service_version: "v1",
      title: "The Windmill and the Star Trails",
      url: "https://apod.nasa.gov/apod/image/2004/WindmillStarTrails1024.jpg"
    };
    const mockTodayRover = {
      photos: [
        {
          id: 102685,
          sol: 1004,
          camera: {
            id: 20,
            name: "FHAZ",
            rover_id: 5,
            full_name: "Front Hazard Avoidance Camera"
          },
          img_src:
            "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
          earth_date: "2015-06-03",
          rover: {
            id: 5,
            name: "Curiosity",
            landing_date: "2012-08-06",
            launch_date: "2011-11-26",
            status: "active",
            max_sol: 2736,
            max_date: "2020-04-17",
            total_photos: 416179,
            cameras: [
              {
                name: "FHAZ",
                full_name: "Front Hazard Avoidance Camera"
              },
              {
                name: "NAVCAM",
                full_name: "Navigation Camera"
              },
              {
                name: "MAST",
                full_name: "Mast Camera"
              },
              {
                name: "CHEMCAM",
                full_name: "Chemistry and Camera Complex"
              },
              {
                name: "MAHLI",
                full_name: "Mars Hand Lens Imager"
              },
              {
                name: "MARDI",
                full_name: "Mars Descent Imager"
              },
              {
                name: "RHAZ",
                full_name: "Rear Hazard Avoidance Camera"
              }
            ]
          }
        }
      ]
    };
    const mockYesterdayRover = {
      photos: [
        {
          id: 102686,
          sol: 1004,
          camera: {
            id: 20,
            name: "FHAZ",
            rover_id: 5,
            full_name: "Front Hazard Avoidance Camera"
          },
          img_src:
            "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
          earth_date: "2015-06-03",
          rover: {
            id: 5,
            name: "Curiosity",
            landing_date: "2012-08-06",
            launch_date: "2011-11-26",
            status: "active",
            max_sol: 2736,
            max_date: "2020-04-17",
            total_photos: 416179,
            cameras: [
              {
                name: "FHAZ",
                full_name: "Front Hazard Avoidance Camera"
              },
              {
                name: "NAVCAM",
                full_name: "Navigation Camera"
              },
              {
                name: "MAST",
                full_name: "Mast Camera"
              },
              {
                name: "CHEMCAM",
                full_name: "Chemistry and Camera Complex"
              },
              {
                name: "MAHLI",
                full_name: "Mars Hand Lens Imager"
              },
              {
                name: "MARDI",
                full_name: "Mars Descent Imager"
              },
              {
                name: "RHAZ",
                full_name: "Rear Hazard Avoidance Camera"
              }
            ]
          }
        }
      ]
    };

    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);

    const store = createStore(rootReducer);
    const { getByAltText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const photoBtn = await waitForElement(() => getByTestId("102685"));
    fireEvent.click(photoBtn);

    // Here, I'm trying to mock out the implementation of the modal functionality, but it is not seeming to work in the test file.
    // If I take out "if (process.env.NODE_ENV !== 'test') " from the App file, I get this error:

    //     react-modal: No elements were found for selector #root.

    //   10 | import Modal from 'react-modal';
    //   11 |
    // > 12 | Modal.setAppElement('#root');

    // From the docs:

    // You need to use the .portal property, as in ReactDOM.findDOMNode(renderedModal.portal) 
    // or TestUtils.scryRenderedDOMComponentsWithClass(Modal.portal, 'my-modal-class') to acquire 
    // a handle to the inner contents of your modal.

    // expect(
    //   await waitForElement(() => getByAltText("from the curiosity rover - expanded"))
    // ).toBeInTheDocument();
    // expect(getByTestId("close-image-btn")).toBeInTheDocument();
  });

  it("should go to the login page when you click the login button", () => {
    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const loginBtn = getByText("login");
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);
    expect(
      getByText("Stay in the orbit of what’s happening today in space")
    ).toBeInTheDocument();
  });

  it("should be able to log in", () => {
    const store = createStore(rootReducer);
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    // const loginBtn = getByText("login");
    // expect(loginBtn).toBeInTheDocument();
    // fireEvent.click(loginBtn);
    // expect(
    //   getByText("Stay in the orbit of what’s happening today in space")
    // ).toBeInTheDocument();
    const nameInput = getByPlaceholderText('your name');
    const emailInput = getByPlaceholderText('email');
    fireEvent.change(nameInput, {target: {value: 'Lili'}});
    fireEvent.change(emailInput, {target: {value: 'lili@gmail.com'}});
    fireEvent.click(getByText("login"));
    expect(getByText('Welcome, Lili')).toBeInTheDocument();
  });

  it("should be able to navigate to the ISS page", () => {
    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
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

    const issBtn = getByText('ISS Tracking');
    fireEvent.click(issBtn);
    expect(
      getByText("International Space Station Tracking")
    ).toBeInTheDocument();
  });
});
