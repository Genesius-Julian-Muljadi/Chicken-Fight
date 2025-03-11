import { configureStore } from "@reduxjs/toolkit";
import TPTSlice from "./slices/toggleProductType";
import TAPSlice from "./slices/toggleAddProduct";
import TAMPSlice from "./slices/toggleAddMainProduct";
import TEPSlice from "./slices/toggleEditProduct";
import TEMPSlice from "./slices/toggleEditMainProduct";
import UCSlice from "./slices/updateCookie";
import UDPSlice from "./slices/updateDashboardProduct";
import UHLSlice from "./slices/updateHeaderLinks";
import PDPSlice from "./slices/promoteDemoteProduct";

export const store = configureStore({
  reducer: {
    TPTSlice,
    TAPSlice,
    TAMPSlice,
    TEPSlice,
    TEMPSlice,
    UCSlice,
    UDPSlice,
    UHLSlice,
    PDPSlice,
  },
});
