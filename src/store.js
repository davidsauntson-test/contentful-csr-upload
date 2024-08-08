import { combineReducers, configureStore } from "@reduxjs/toolkit";

import screenReducer from "./state/screenSlice";
import suppliersReducer from "./state/supplierSlice";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  screen: screenReducer,
  suppliers: suppliersReducer,
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
