import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const uploadErrorsSlice = createSlice({
  name: "uploadErrors",
  initialState,
  reducers: {
    addErrors: (state, action) => {
      state.value = action.payload.map(
        (error) => `Row ${error.row} - ${error.message}`,
      );
    },
    resetErrors: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addErrors, resetErrors } = uploadErrorsSlice.actions;

export default uploadErrorsSlice.reducer;
