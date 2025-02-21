import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editActive: false,
};

const toggleEditMainProductSlice = createSlice({
  name: "TEMPSlice",
  initialState,
  reducers: {
    toggleEditMainProduct: (state: { editActive: boolean }, input: { payload: boolean }) => {
      state.editActive = input.payload;
    },
  },
});

export const { toggleEditMainProduct } = toggleEditMainProductSlice.actions;
export default toggleEditMainProductSlice.reducer;
