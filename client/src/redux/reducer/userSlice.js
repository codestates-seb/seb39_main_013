import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initState = {
  id: 0,
  name: "",
  email: "",
  address: '',
  postcode: '',
  phone: '',
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.postcode = action.payload.postcode;
      state.phone = action.payload.phone;
      state.isLogin = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initState);
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
