import productTypes from "@/data/productTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 1,
};

const toggleProductTypeSlice = createSlice({
  name: "TPTSlice",
  initialState,
  reducers: {
    toggleProductType: (
      state: { type: number | null },
      input: { payload: number }
    ) => {
      if (input.payload >= 1 && input.payload <= productTypes.length) {
        state.type = input.payload;
      } else if (input.payload === 0) {
        state.type = null;
      } else {
        console.log("Invalid input: " + input.payload);
      }
    },
  },
});

export const { toggleProductType } = toggleProductTypeSlice.actions;
export default toggleProductTypeSlice.reducer;
