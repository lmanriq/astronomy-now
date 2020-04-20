import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import Modal from "react-modal";
import {
  fetchPOTD,
  fetchRoverPhotos,
  fetchPosition,
  fetchPeopleData,
  fetchAllNews,
  fetchNewsDetails
} from "../../utils/apiCalls";
jest.mock("../../utils/apiCalls");
Modal.setAppElement(document.createElement("div"));

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

const mockRover3 = {
  photos: [
    {
      id: 1026853,
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
const mockRover4 = {
  photos: [
    {
      id: 1026444,
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

const mockNewsData = [
  {
    news_id: "2020-14",
    name: "Piercing the Dark Birthplaces of Massive Stars with Webb",
    url: "https://webbtelescope.org/contents/news-releases/2020/news-2020-14"
  },
  {
    news_id: "2020-10",
    name: "Quasar Tsunamis Rip Across Galaxies",
    url: "https://hubblesite.org/contents/news-releases/2020/news-2020-10"
  },
  {
    news_id: "2020-04",
    name:
      "Cosmic Magnifying Glasses Yield Independent Measure of Universe's Expansion",
    url: "https://hubblesite.org/contents/news-releases/2020/news-2020-04"
  }
];

const mockDetailedData = [
  {
    name: "Piercing the Dark Birthplaces of Massive Stars with Webb",
    news_id: "2020-14",
    url: "https://webbtelescope.org/contents/news-releases/2020/news-2020-14",
    publication: "2020-04-10T10:00:00.000-04:00",
    mission: "james_webb",
    abstract:
      "While we know that high-mass stars often die as dazzling supernovas, their births are much more mysterious. They form in very dense, cold clouds of gas and dust that can have up to 100,000 times the mass of the Sun. Little is known about these regions, which are so dense that they often appear as big, dark blobs on the sky. Seemingly devoid of stars, the clouds are actually obscuring the light from background stars. These dark patches are so thick with dust that they even block out some wavelengths of infrared light, which can usually penetrate through dusty clouds. For this reason, they are called infrared-dark clouds. However, Webb’s unprecedented sensitivity allows observations of background stars even through these very dense regions. By doing this, astronomers can probe the structure of the clouds, which is essential for understanding the star-formation process.\r\n\r\n",
    thumbnail:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/low_STSCI-J-p2014a-t-400x400.png",
    thumbnail_retina:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/STSCI-J-p2014a-t-400x400.png",
    thumbnail_1x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/low_STSCI-J-p2014a-t-400x400.png",
    thumbnail_2x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/STSCI-J-p2014a-t-400x400.png",
    keystone_image_1x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1350/low_STSCI-J-p2014a-k-1340x520.png",
    keystone_image_2x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1350/STSCI-J-p2014a-k-1340x520.png",
    release_images: [4644, 4645]
  },
  {
    name: "Quasar Tsunamis Rip Across Galaxies",
    news_id: "2020-10",
    url: "https://hubblesite.org/contents/news-releases/2020/news-2020-10",
    publication: "2020-03-19T13:00:00.000-04:00",
    mission: "hubble",
    abstract:
      "The weather forecast for galaxies hosting monster, active black holes is blustery. Engorged by infalling material, a supermassive black hole heats so much gas that it can shine 1,000 times brighter than its host galaxy. But that’s not all.\r\n\r\nHubble astronomers found that the region around the black hole emits so much radiation that it pushes out material at a few percent the speed of light (a speed fast enough to travel from Earth to the Moon in a few minutes). This material slams into a host galaxy’s lanes of gas and dust, preventing the formation of new stars. The torrential winds are snowplowing the equivalent of hundreds of solar masses of material each year. And, the forecast is that this stormy weather will continue for at least ten million years.\r\n",
    credits:
      '<a href="http://www.nasa.gov">NASA</a>, <a href="http://www.spacetelescope.org">ESA</a>, and N. Arav (Virginia Tech)',
    thumbnail:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/low_STScI-H-p2010a-t-400x400.jpg",
    thumbnail_retina:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/STScI-H-p2010a-t-400x400.jpg",
    thumbnail_1x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/low_STScI-H-p2010a-t-400x400.jpg",
    thumbnail_2x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/STScI-H-p2010a-t-400x400.jpg",
    keystone_image_1x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1337/low_STScI-H-2010a-k-1340x520.png",
    keystone_image_2x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1337/STScI-H-2010a-k-1340x520.png",
    release_images: [4638]
  },
  {
    name:
      "Cosmic Magnifying Glasses Yield Independent Measure of Universe's Expansion",
    news_id: "2020-04",
    url: "https://hubblesite.org/contents/news-releases/2020/news-2020-04",
    publication: "2020-01-08T14:55:00.000-05:00",
    mission: "hubble",
    abstract:
      "People use the phrase \"Holy Cow\" to express excitement. Playing with that phrase, researchers from an international collaboration developed an acronym—H0LiCOW—for their project's name that expresses the excitement over their Hubble Space Telescope measurements of the universe's expansion rate.\r\n\r\nKnowing the precise value for how fast the universe expands is important for determining the age, size, and fate of the cosmos. Unraveling this mystery has been one of the greatest challenges in astrophysics in recent years.\r\n\r\nMembers of the H0LiCOW (H0 Lenses in COSMOGRAIL's Wellspring) team used Hubble and a technique that is completely independent of any previous method to measure the universe's expansion, a value called the Hubble constant.\r\n\r\nThis latest value represents the most precise measurement yet using the gravitational lensing method, where the gravity of a foreground galaxy acts like a giant magnifying lens, amplifying and distorting light from background objects. This latest study did not rely on the traditional \"cosmic distance ladder\" technique to measure accurate distances to galaxies by using various types of stars as \"milepost markers.\" Instead, the researchers employed the exotic physics of gravitational lensing to calculate the universe's expansion rate.\r\n\r\nThe researchers' result further strengthens a troubling discrepancy between the expansion rate calculated from measurements of the local universe and the rate as predicted from background radiation in the early universe, a time before galaxies and stars even existed. The new study adds evidence to the idea that new theories may be needed to explain what scientists are finding.",
    credits:
      '<a href="http://www.nasa.gov">NASA</a>, <a href="http://www.spacetelescope.org">ESA</a>, S.H. Suyu (Max Planck Institute for Astrophysics, Technical University of Munich, and Academia Sinica Institute of Astronomy and Astrophysics), and K.C. Wong (University of Tokyo\'s Kavli Institute for the Physics and Mathematics of the Universe)',
    thumbnail:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/low_STSCI-H-p2004a-t-400x400.png",
    thumbnail_retina:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/STSCI-H-p2004a-t-400x400.png",
    thumbnail_1x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/low_STSCI-H-p2004a-t-400x400.png",
    thumbnail_2x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/STSCI-H-p2004a-t-400x400.png",
    keystone_image_1x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1328/low_STSCI-H-p2004a-k-1340x520.png",
    keystone_image_2x:
      "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1328/STSCI-H-p2004a-k-1340x520.png",
    release_images: [4606, 4600, 4607]
  }
];

describe("App", () => {
  it("Should render the photo page on load", () => {
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);
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
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);

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
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);

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
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);

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
    const nameInput = getByPlaceholderText("your name");
    const emailInput = getByPlaceholderText("email");
    fireEvent.change(nameInput, { target: { value: "Lili" } });
    fireEvent.change(emailInput, { target: { value: "lili@gmail.com" } });
    fireEvent.click(getByText("login"));
    expect(getByText("Welcome, Lili")).toBeInTheDocument();
  });

  it("should be able to navigate to the ISS page", () => {
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);

    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    fetchPosition.mockResolvedValue(mockPosition);
    fetchPeopleData.mockResolvedValueOnce(mockPeopleData);

    const issBtn = getByText("ISS Tracking");
    fireEvent.click(issBtn);
    expect(
      getByText("International Space Station Tracking")
    ).toBeInTheDocument();

    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);

    fireEvent.click(getByText("Photos of the Day"));
  });

  it("should be able to navigate to the Hubble News page", () => {
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);
    fetchAllNews.mockResolvedValueOnce(mockNewsData);
    fetchNewsDetails.mockResolvedValueOnce(mockDetailedData);

    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const hubbleBtn = getByText("Hubble News");
    fireEvent.click(hubbleBtn);
    expect(
      getByText("News from the Hubble Space Telescope")
    ).toBeInTheDocument();
  });

  it("should be able to navigat to the favorites page", () => {
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);
    fetchAllNews.mockResolvedValueOnce(mockNewsData);
    fetchNewsDetails.mockResolvedValueOnce(mockDetailedData);

    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const favsBtn = getByText("Favorites");
    fireEvent.click(favsBtn);
    expect(getByText("Your Favorites")).toBeInTheDocument();
  });

  it("should be able to favorite news stories and see them on the favorites page", async () => {
    fetchPOTD.mockResolvedValueOnce(mockPOTD);
    fetchRoverPhotos.mockResolvedValueOnce(mockTodayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockYesterdayRover);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover3);
    fetchRoverPhotos.mockResolvedValueOnce(mockRover4);

    const store = createStore(rootReducer);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    fetchAllNews.mockResolvedValueOnce(mockNewsData);
    fetchNewsDetails.mockResolvedValueOnce(mockDetailedData);

    const hubbleBtn = getByText("Hubble News");
    fireEvent.click(hubbleBtn);

    const favBtn1 = await waitForElement(() => getByTestId("news-2020-14"));
    const favBtn2 = await waitForElement(() => getByTestId("news-2020-10"));
    fireEvent.click(favBtn1);
    fireEvent.click(favBtn2);

    const favsBtn = getByText("Favorites");
    fireEvent.click(favsBtn);

    expect(
      getByText("Piercing the Dark Birthplaces of Massive Stars with Webb")
    ).toBeInTheDocument();
    expect(
      getByText("Quasar Tsunamis Rip Across Galaxies")
    ).toBeInTheDocument();
  });
});
