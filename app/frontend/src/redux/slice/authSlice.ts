import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  authLoading: boolean;
}

const initialState: AuthState = { isAuthenticated: false, authLoading: true };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuthentication: (
      state,
      action: PayloadAction<{ authLoading: boolean }>
    ) => {
      state.isAuthenticated = true;
      state.authLoading = action.payload.authLoading;
    },
    unsetUserAuthentication: (state) => {
      state.isAuthenticated = false;
      state.authLoading = true;
    },
  },
});

export const { setUserAuthentication, unsetUserAuthentication } =
  authSlice.actions;

export default authSlice.reducer;
