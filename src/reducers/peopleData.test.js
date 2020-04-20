import { peopleData } from "./peopleData";

describe("peopleData", () => {
  it("should return the initial state", () => {
    const expectedResult = {};
    const result = peopleData(undefined, { people: "people" });
    expect(result).toEqual(expectedResult);
  });

  it("when receiving LOAD_PEOPLE action, it should return the updated array", () => {
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
    const sampleAction = {
      type: "LOAD_PEOPLE",
      peopleData: mockPeopleData
    };
    const result = peopleData({}, sampleAction);
    expect(result).toEqual(mockPeopleData);
  });
});
