import { combineReducers } from "redux";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice,
  modal: modalSlice,
  cart: cartSlice
});

export default rootReducer;
