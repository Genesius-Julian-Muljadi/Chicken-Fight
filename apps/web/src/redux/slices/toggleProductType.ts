import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "Male"
};

const toggleProductTypeSlice = createSlice({
    name: "TPTSlice",
    initialState,
    reducers: {
        toggleProductType: (state: {type: string | null}, input: {payload: string}) => {
            if (input.payload === "Male" || "Female") {
                state.type = input.payload;
            } else if (input.payload === "reset") {
                state.type = null;
            } else {
                console.log("Invalid input: " + input.payload);
            };
        }
    },
});

export const { toggleProductType } = toggleProductTypeSlice.actions;
export default toggleProductTypeSlice.reducer;