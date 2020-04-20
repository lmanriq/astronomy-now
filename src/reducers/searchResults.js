export const searchResults = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_RESULTS":
      return { ...action.results };
    default:
      return state;
  }
};
