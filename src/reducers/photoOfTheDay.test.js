import { photoOfTheDay } from "./photoOfTheDay";

describe("photoOfTheDay", () => {
  it("should return the initial state", () => {
    const expectedResult = {};
    const result = photoOfTheDay(undefined, { photo: "photo" });
    expect(result).toEqual(expectedResult);
  });

  it("when receiving LOAD_POTD action, it should return the updated object", () => {
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
    const sampleAction = {
      type: "LOAD_POTD",
      data: mockPOTD
    };
    const result = photoOfTheDay({}, sampleAction);
    expect(result).toEqual(mockPOTD);
  });
});
