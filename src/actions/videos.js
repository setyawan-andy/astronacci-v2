import * as api from "../api";

export const getVideos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVideos();
    dispatch({ type: "FETCH_VIDEOS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
