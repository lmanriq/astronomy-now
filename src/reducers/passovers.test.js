import { passovers } from "./passovers";

describe("passovers", () => {
  it("should return the initial state", () => {
    const expectedResult = [];
    const result = passovers(undefined, ["passover"]);
    expect(result).toEqual(expectedResult);
  });

  it("when receiving ADD_FAVORITE action, it should return the updated array", () => {
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
    const sampleAction = {
      type: "LOAD_PASSOVERS",
      passovers: mockPassover.response
    };
    const result = passovers([], sampleAction);
    expect(result).toEqual(mockPassover.response);
  });
});
