import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
