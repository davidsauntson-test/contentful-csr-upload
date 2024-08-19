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

export const getSmallSuppliers = createSelector(
  (state) => state.suppliers.value,
  (suppliers) => suppliers.filter((s) => s.isSmall),
);

export const getRankedSuppliers = createSelector(
  (state) => state.suppliers.value,
  (suppliers) => suppliers.filter((s) => !s.isSmall),
);
