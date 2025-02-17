import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formActive: false,
};

const toggleAddProductSlice = createSlice({
  name: "TAPSlice",
  initialState,
  reducers: {
    toggleAddProduct: (state: { formActive: boolean }, input: { payload: boolean }) => {
      state.formActive = input.payload;
    },
  },
});

export const { toggleAddProduct } = toggleAddProductSlice.actions;
export default toggleAddProductSlice.reducer;
