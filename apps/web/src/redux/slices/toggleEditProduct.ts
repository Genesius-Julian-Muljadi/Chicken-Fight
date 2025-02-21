import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: null,
};

const toggleEditProductSlice = createSlice({
  name: "TEPSlice",
  initialState,
  reducers: {
    toggleEditProduct: (
      state: {
        options: {
          productID: number;
          editActive: boolean;
        } | null;
      },
      input: {
        payload: {
          productID: number;
          editActive: boolean;
        };
      }
    ) => {
      state.options = input.payload;
    },
  },
});

export const { toggleEditProduct } = toggleEditProductSlice.actions;
export default toggleEditProductSlice.reducer;
