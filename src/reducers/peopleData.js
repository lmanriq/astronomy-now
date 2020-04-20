export const peopleData = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_PEOPLE":
      return action.peopleData;
    default:
      return state;
  }
};
