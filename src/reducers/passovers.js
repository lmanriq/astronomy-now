export const passovers = (state =[], action) => {
  switch(action.type) {
    case 'LOAD_PASSOVERS':
      return [...action.passovers];
    default:
      return state;
  }
}