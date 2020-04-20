import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expectedResult = false;
    const result = isLoading(undefined, true);
    expect(result).toEqual(expectedResult)
  })
  it('when receiving SHOW_ERROR action, it should return the error string', () => {
    const sampleAction = {
      type: "IS_LOADING",
      isLoading: true
    }
    const result = isLoading(false, sampleAction);
    expect(result).toEqual(true);
  })
})