export default (videos = [], action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload;
    case "CREATE_VIDEO":
      return videos;
    default:
      return videos;
  }
};
