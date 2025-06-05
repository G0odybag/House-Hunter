import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = "";
      state.isAuthenticated = false;
    },
    signup: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      console.log("User details:", action.payload.details);
    },
  },
});

export const { login, logout, signup } = userSlice.actions;
export default userSlice.reducer;