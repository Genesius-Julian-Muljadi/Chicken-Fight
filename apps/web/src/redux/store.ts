import { configureStore } from "@reduxjs/toolkit";
import TPTSlice from "./slices/toggleProductType";
import TESlice from "./slices/toggleEdit";
import UCSlice from "./slices/updateCookie";

export const store = configureStore({
  reducer: {
    TPTSlice,
    TESlice,
    UCSlice,
  },
});
