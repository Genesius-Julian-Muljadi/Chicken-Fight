import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formActive: false,
};

const toggleAddMainProductSlice = createSlice({
  name: "TAMPSlice",
  initialState,
  reducers: {
    toggleAddMainProduct: (state: { formActive: boolean }, input: { payload: boolean }) => {
      state.formActive = input.payload;
    },
  },
});

export const { toggleAddMainProduct } = toggleAddMainProductSlice.actions;
export default toggleAddMainProductSlice.reducer;
