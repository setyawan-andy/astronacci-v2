import { combineReducers } from "redux";

import articles from "./articles";
import auth from "./auth";
import videos from "./videos";

export default combineReducers({
  articles,
  auth,
  videos,
});
