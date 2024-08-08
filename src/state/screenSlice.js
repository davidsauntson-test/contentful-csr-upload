import { createSlice } from "@reduxjs/toolkit";
import { UPLOAD } from "../constants/screens";

const initialState = {
  value: UPLOAD,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;
