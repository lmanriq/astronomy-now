import { user } from "./user";

describe("user", () => {
  it("should return the initial state", () => {
    const expectedResult = {};
    const result = user(undefined, {});
    expect(result).toEqual(expectedResult);
  });

  it("when receiving LOGIN_USER action, it should return the user object", () => {
    const sampleUser = {
      name: "Alan",
      email: "alan@turing.io"
    };
    const sampleAction = {
      type: "LOGIN_USER",
      user: sampleUser
    };
    const result = user({}, sampleAction);
    expect(result).toEqual(sampleUser);
  });

  it("when receiving LOGOUT_USER action, it should return an empty object", () => {
    const sampleUser = {
      name: "Alan",
      email: "alan@turing.io"
    };
    const sampleAction = {
      type: "LOGOUT_USER"
    };
    const result = user(sampleUser, sampleAction);
    expect(result).toEqual({});
  });
});
