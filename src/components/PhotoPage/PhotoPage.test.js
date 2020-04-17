import React from "react";
import { render, waitForElement } from "@testing-library/react";
import PhotoPage from "./PhotoPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import { fetchPOTD } from "../../utils/apiCalls";
jest.mock("../../utils/apiCalls");

describe("Photo Page", () => {
  it("Should render what we expect", async () => {
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
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    const store = createStore(rootReducer);
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <PhotoPage />
        </Router>
      </Provider>
    );
    expect(
      await waitForElement(() => getByText("Apr 17, 2020"))
    ).toBeInTheDocument();
    expect(
      await waitForElement(() => getByText("NASA's Astronomy Photo of The Day"))
    ).toBeInTheDocument();
    expect(
      await waitForElement(() => getByText("Click to download HD Image"))
    ).toBeInTheDocument();
    expect(
      await waitForElement(() => getByText("The Windmill and the Star Trails"))
    ).toBeInTheDocument();
    expect(
      await waitForElement(() =>
        getByText(
          "Stars can't turn these old wooden arms, but it does look like they might in this scene from a rotating planet. The well-composed night skyscape was recorded from Garafia, a municipality on the island of La Palma, Canary Islands, planet Earth. The center of the once working windmill, retired since 1953, is lined-up with the north celestial pole, the planet's rotation axis projected on to the northern sky. From a camera fixed to a tripod, the star trails are a reflection of the planet's rotation traced in a digital composite of 39 sequential exposures each 25 seconds long. Brought out by highlighting the final exposure in the sequence, the stars themselves appear at the ends of their short concentric arcs. A faint band of winter's Milky Way and even a diffuse glow from our neighboring Andromeda Galaxy also shine in the night."
        )
      )
    ).toBeInTheDocument();
    expect(
      await waitForElement(() => getByText("© Antonio Gonzalez"))
    ).toBeInTheDocument();
    expect(
      await waitForElement(() =>
        getByAltText("The Windmill and the Star Trails")
      )
    ).toBeInTheDocument();
  });
});
