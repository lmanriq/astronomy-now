export const issPosition = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_ISS_POSITION":
      return action.position;
    default:
      return state;
  }
};
