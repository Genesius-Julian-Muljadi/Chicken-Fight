import { configureStore } from "@reduxjs/toolkit";
import TPTSlice from "./slices/toggleProductType";
import UCSlice from "./slices/updateCookie";

export const store = configureStore({
    reducer: {
        TPTSlice,
        UCSlice,
    },
});