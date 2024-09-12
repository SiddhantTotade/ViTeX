import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  is_admin: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.first_name = action.payload?.first_name;
      state.last_name = action.payload?.last_name;
      state.email = action.payload?.email;
      state.is_admin = action.payload?.is_admin;
    },
    unsetUserInfo: (state) => {
      state.first_name = initialState.first_name;
      state.last_name = initialState.last_name;
      state.email = initialState.email;
      state.is_admin = initialState.is_admin;
    },
  },
});

export const { setUserInfo, unsetUserInfo } = userSlice.actions;
export default userSlice.reducer;
