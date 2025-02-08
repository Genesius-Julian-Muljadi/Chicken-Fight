import { configureStore } from "@reduxjs/toolkit";
import TPTSlice from "./slices/toggleProductType";

export const store = configureStore({
    reducer: {
        TPTSlice,
    },
});