import { createSlice } from "@reduxjs/toolkit";
import { INITIALISED } from "../constants/app-status";

const initialState = {
  value: INITIALISED,
};

export const appStatusSlice = createSlice({
  name: "appStatus",
  initialState,
  reducers: {
    setAppStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAppStatus } = appStatusSlice.actions;

export default appStatusSlice.reducer;
