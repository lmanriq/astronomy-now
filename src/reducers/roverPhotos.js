export const roverPhotos = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_ROVER_PHOTOS':
      return action.photos;
    default:
      return state;
  }
}