export const favorites = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.id];
    case "REMOVE_FAVORITE":
      const filteredIds = state.filter(id => id !== action.id);
      return filteredIds;
    default:
      return state;
  }
};
