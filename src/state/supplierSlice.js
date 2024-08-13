import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {
    addSupplier: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    resetSuppliers: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSupplier, resetSuppliers } = suppliersSlice.actions;

export default suppliersSlice.reducer;
