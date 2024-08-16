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

export const getSuppliersFoundInContentful = createSelector(
  [
    (state) => state.suppliers.value,
    (state) => state.contentfulSuppliers.value,
  ],
  (suppliers, contentfulSuppliers) => {
    return suppliers
      .map((s) => {
        return {
          supplier: s,
          contentfulSupplier: contentfulSuppliers.find((cs) => cs.id === s.id),
        };
      })
      .filter((pair) => pair.contentfulSupplier !== undefined);
  },
);

export const getSuppliersNotInContentful = createSelector(
  [
    (state) => state.suppliers.value,
    (state) => state.contentfulSuppliers.value,
  ],
  (suppliers, contentfulSuppliers) => {
    return suppliers
      .map((s) => {
        return {
          supplier: s,
          contentfulSupplier: contentfulSuppliers.find((cs) => cs.id === s.id),
        };
      })
      .filter((pair) => pair.contentfulSupplier === undefined);
  },
);

export const getContentfulSuppliersNotInFile = createSelector(
  [
    (state) => state.suppliers.value,
    (state) => state.contentfulSuppliers.value,
  ],
  (suppliers, contentfulSuppliers) => {
    return contentfulSuppliers
      .map((cs) => {
        return {
          supplier: suppliers.find((s) => s.id === cs.id),
          contentfulSupplier: cs,
        };
      })
      .filter((pair) => pair.supplier === undefined);
  },
);
