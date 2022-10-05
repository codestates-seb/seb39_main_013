import { combineReducers } from "redux";
import modalSlice from "./modalSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice,
  modal: modalSlice
});

export default rootReducer;
