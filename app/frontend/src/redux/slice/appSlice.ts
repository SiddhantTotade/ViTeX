import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  ipAddressLoading: boolean;
}

const initialState: AppState = { ipAddressLoading: true };

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserAuthentication: (state) => {
      state.ipAddressLoading = true;
    },
    unsetUserAuthentication: (state) => {
      state.ipAddressLoading = false;
    },
  },
});

export const { setUserAuthentication, unsetUserAuthentication } =
  appSlice.actions;

export default appSlice.reducer;
