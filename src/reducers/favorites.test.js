import { favorites } from "./favorites";

describe("favorites", () => {
  it("should return the initial state", () => {
    const expectedResult = [];
    const result = favorites(undefined, [2]);
    expect(result).toEqual(expectedResult);
  });

  it("when receiving ADD_FAVORITE action, it should return the updated array", () => {
    const sampleAction = {
      type: "ADD_FAVORITE",
      id: 2
    };
    const result = favorites([4], sampleAction);
    expect(result).toEqual([4, 2]);
  });
  it("when receiving REMOVE_FAVORITE action, it should return the updated array", () => {
    const sampleAction = {
      type: "REMOVE_FAVORITE",
      id: 2
    };
    const result = favorites([4, 2], sampleAction);
    expect(result).toEqual([4]);
  });
});
