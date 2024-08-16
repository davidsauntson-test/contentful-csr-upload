import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const contentfulSuppliersSlice = createSlice({
  name: "contentfulSuppliers",
  initialState,
  reducers: {
    addContentfulSupplier: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContentfulSupplier } = contentfulSuppliersSlice.actions;

export default contentfulSuppliersSlice.reducer;
