import { error } from './error';

describe('error', () => {
  it('should return the initial state', () => {
    const expectedResult = '';
    const result = error(undefined, 'hello');
    expect(result).toEqual(expectedResult)
  })
  it('when receiving SHOW_ERROR action, it should return the error string', () => {
    const sampleAction = {
      type: 'SHOW_ERROR',
      error: "Invalid fetch"
    }
    const result = error('', sampleAction);
    expect(result).toEqual("Invalid fetch");
  })
  it('when receiving REMOVE_ERROR action, it should return an empty object', () => {
    const sampleAction = {
      type: 'REMOVE_ERROR'
    }
    const result = error("Invalid fetch", sampleAction);
    expect(result).toEqual('')
  })
})