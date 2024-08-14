import { createSelector } from "@reduxjs/toolkit";
import { PARSING_FINISHED } from "../constants/app-status";

export const getCanMatch = createSelector(
  [
    (state) => state.suppliers.value,
    (state) => state.uploadErrors.value,
    (state) => state.appStatus.value,
  ],
  (suppliers, errors, status) =>
    suppliers.length > 0 && errors.length === 0 && status === PARSING_FINISHED,
);
