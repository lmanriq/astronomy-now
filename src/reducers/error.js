export const error = (state = '', action) => {
  switch(action.type) {
    case 'SHOW_ERROR':
      return action.error;
    case 'REMOVE_ERROR':
      return '';
    default:
      return state;
  }
}