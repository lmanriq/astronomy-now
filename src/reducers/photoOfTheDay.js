export const photoOfTheDay = (state = {}, action) => {
  switch(action.type) {
    case 'LOAD_POTD':
      return action.data;
    default:
      return state;
  }
}