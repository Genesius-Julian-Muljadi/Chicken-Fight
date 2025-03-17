import { Product } from "@/interfaces/databaseTables";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  promote: false,
  promoteProduct: null,
  demote: false,
  demoteProduct: null,
};

const promoteDemoteProductSlice = createSlice({
  name: "PDPSlice",
  initialState,
  reducers: {
    promoteDemoteProduct: (
      state: {
        promote: boolean;
        promoteProduct: Product | null;
        demote: boolean;
        demoteProduct: Product | null;
      },
      input: {
        payload: {
          promote?: boolean;
          promoteProduct?: Product;
          demote?: boolean;
          demoteProduct?: Product;
        };
      }
    ) => {
      if (input.payload.promote) {
        if (!input.payload.promoteProduct) {
          throw new Error("Invalid input");
        }
        state.promote = input.payload.promote;
        state.promoteProduct = input.payload.promoteProduct;
      } else {
        state.promote = false;
        state.promoteProduct = null;
      }
      if (input.payload.demote) {
        if (!input.payload.demoteProduct) {
          throw new Error("Invalid input");
        }
        state.demote = input.payload.demote;
        state.demoteProduct = input.payload.demoteProduct;
      } else {
        state.demote = false;
        state.demoteProduct = null;
      }
    },
  },
});

export const { promoteDemoteProduct } = promoteDemoteProductSlice.actions;
export default promoteDemoteProductSlice.reducer;
