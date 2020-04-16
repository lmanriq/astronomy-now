export const news = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_NEWS':
      return action.news;
    default:
      return state;
  }
}