import { Product } from "@/interfaces/databaseTables";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newProduct: null,
  edit: false,
  deleteID: null,
};

const updateDashboardProductSlice = createSlice({
  name: "UDPSlice",
  initialState,
  reducers: {
    updateDashboardProduct: (
      state: {
        newProduct: Product | null;
        edit: boolean;
        deleteID: number | null;
      },
      input: {
        payload: {
          product?: Product;
          edit?: boolean;
          deleteID?: number;
        };
      }
    ) => {
      if (input.payload.deleteID && input.payload.deleteID > 0) {
        state.deleteID = input.payload.deleteID;
        state.newProduct = null;
        state.edit = false;
      } else if (input.payload.product) {
        if (input.payload.edit) {
          state.edit = true;
        }
        state.deleteID = null;
        state.newProduct = input.payload.product;
      } else {
        throw new Error("Invalid input!");
      }
    },
  },
});

export const { updateDashboardProduct } = updateDashboardProductSlice.actions;
export default updateDashboardProductSlice.reducer;
