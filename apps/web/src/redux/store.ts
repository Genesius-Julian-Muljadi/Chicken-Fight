import { configureStore } from "@reduxjs/toolkit";
import TPTSlice from "./slices/toggleProductType";
import TAPSlice from "./slices/toggleAddProduct";
import TAMPSlice from "./slices/toggleAddMainProduct";
import TESlice from "./slices/toggleEdit";
import UCSlice from "./slices/updateCookie";
import UDPSlice from "./slices/updateDashboardProduct";

export const store = configureStore({
  reducer: {
    TPTSlice,
    TAPSlice,
    TAMPSlice,
    TESlice,
    UCSlice,
    UDPSlice,
  },
});
