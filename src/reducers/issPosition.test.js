import { issPosition } from "./issPosition";

describe("issPosition", () => {
  it("should return the initial state", () => {
    const expectedResult = {};
    const result = issPosition(undefined, { lat: 5, lon: 5 });
    expect(result).toEqual(expectedResult);
  });

  it("when receiving ADD_FAVORITE action, it should return the updated array", () => {
    const mockPosition = {
      message: "success",
      iss_position: {
        longitude: "-61.6754",
        latitude: "10.6716"
      },
      timestamp: 1587156872
    };
    const sampleAction = {
      type: "UPDATE_ISS_POSITION",
      position: mockPosition
    };
    const result = issPosition({}, sampleAction);
    expect(result).toEqual(mockPosition);
  });
});
