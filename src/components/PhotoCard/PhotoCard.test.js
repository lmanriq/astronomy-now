import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PhotoCard from "./PhotoCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("Photo Card", () => {
  it("Should render what we expect", () => {
    const mockPhoto = {
      id: 739467,
      sol: 2736,
      camera: {
        id: 20,
        name: "FHAZ",
        rover_id: 5,
        full_name: "Front Hazard Avoidance Camera"
      },
      img_src:
        "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02736/opgs/edr/fcam/FLB_640388280EDR_F0791222FHAZ00302M_.JPG",
      earth_date: "2020-04-17",
      rover: {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 2737,
        max_date: "2020-04-18",
        total_photos: 416203,
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
    };
    const store = createStore(rootReducer);
    const { getByAltText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <PhotoCard image={mockPhoto.img_src} key={2} testid={mockPhoto.id} />
        </Router>
      </Provider>
    );
    expect(getByAltText("from the curiosity rover")).toBeInTheDocument();
    expect(getByTestId("739467")).toBeInTheDocument();
  });
});
