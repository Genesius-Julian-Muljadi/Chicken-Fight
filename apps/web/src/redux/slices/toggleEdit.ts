import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: false,
};

const toggleEditSlice = createSlice({
  name: "TESlice",
  initialState,
  reducers: {
    toggleEdit: (state: { edit: boolean }, input: { payload: boolean }) => {
      state.edit = input.payload;
    },
  },
});

export const { toggleEdit } = toggleEditSlice.actions;
export default toggleEditSlice.reducer;
