import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./state/screenSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});
