import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initState = {
  name: "",
  email: "",
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLogin = true;
    },
    deleteUser: (state) => {
      state.name = "";
      state.email = "";
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initState);
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
