export const isLoading = (state = false, action) => {
  switch (action.type) {
    case "UPDATE_LOADING":
      return action.loading;
    default:
      return state;
  }
};
