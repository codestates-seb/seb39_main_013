import { combineReducers } from "redux";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});

export default rootReducer;
