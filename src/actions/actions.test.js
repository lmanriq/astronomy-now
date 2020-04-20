import * as actions from "../actions";

describe("Action Creators", () => {
  it("should have a type of LOAD_POTD and a correct payload", () => {
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
    const expectedAction = {
      type: "LOAD_POTD",
      data: mockPOTD
    };
    const result = actions.loadPhotoOfTheDay(mockPOTD);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of LOGIN_USER and a correct payload", () => {
    const mockUser = { name: "Lili", email: "lili@gmail.com" };
    const expectedAction = {
      type: "LOGIN_USER",
      user: mockUser
    };
    const result = actions.loginUser(mockUser);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of LOGOUT_USER", () => {
    const expectedAction = {
      type: "LOGOUT_USER"
    };
    const result = actions.logoutUser();
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of LOAD_NEWS and a correct payload", () => {
    const mockNewsData = [
      {
        news_id: "2020-14",
        name: "Piercing the Dark Birthplaces of Massive Stars with Webb",
        url:
          "https://webbtelescope.org/contents/news-releases/2020/news-2020-14"
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
    const expectedAction = {
      type: "LOAD_NEWS",
      news: mockNewsData
    };
    const result = actions.loadNews(mockNewsData);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of ADD_FAVOIRTE and a correct payload", () => {
    const expectedAction = {
      type: "ADD_FAVORITE",
      id: 2
    };
    const result = actions.addFavorite(2);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of REMOVE_FAVORITE and a correct payload", () => {
    const expectedAction = {
      type: "REMOVE_FAVORITE",
      id: 2
    };
    const result = actions.removeFavorite(2);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of UPDATE_ISS_POSITION and a correct payload", () => {
    const mockPosition = {
      message: "success",
      iss_position: {
        longitude: "-61.6754",
        latitude: "10.6716"
      },
      timestamp: 1587156872
    };
    const expectedAction = {
      type: "UPDATE_ISS_POSITION",
      position: mockPosition
    };
    const result = actions.updateISSPosition(mockPosition);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of LOAD_PEOPLE and a correct payload", () => {
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
    const expectedAction = {
      type: "LOAD_PEOPLE",
      peopleData: mockPeopleData
    };
    const result = actions.loadPeople(mockPeopleData);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of LOAD_RESULTS and a correct payload", () => {
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
    const expectedAction = {
      type: "LOAD_RESULTS",
      results: mockPassover
    };
    const result = actions.loadSearchResults(mockPassover);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of SHOW_ERROR and a correct payload", () => {
    const expectedAction = {
      type: "SHOW_ERROR",
      error: "Invalid fetch"
    };
    const result = actions.showError("Invalid fetch");
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of REMOVE_ERROR", () => {
    const expectedAction = {
      type: "REMOVE_ERROR"
    };
    const result = actions.removeError();
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of LOAD_ROVER_PHOTOS and a correct payload", () => {
    const mockRover = {
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
    const expectedAction = {
      type: "LOAD_ROVER_PHOTOS",
      photos: mockRover
    };
    const result = actions.loadRoverPhotos(mockRover);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of UPDATE_LOADING and return the updated boolean", () => {
    const expectedAction = {
      type: "UPDATE_LOADING",
      loading: true
    }
    const result = actions.updateLoading(true);
    expect(result).toEqual(expectedAction);
  })
});
