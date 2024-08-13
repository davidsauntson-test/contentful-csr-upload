import { combineReducers, configureStore } from "@reduxjs/toolkit";

import screenReducer from "./state/screenSlice";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  screen: screenReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = configureStore({
  reducer: rootReducer,
});
