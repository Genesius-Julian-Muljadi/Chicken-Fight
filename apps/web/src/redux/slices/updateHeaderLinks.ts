import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerLinks: null,
};

const updateHeaderLinksSlice = createSlice({
  name: "UHLSlice",
  initialState,
  reducers: {
    updateHeaderLinks: (
      state: { headerLinks: Array<{ href: string; title: string }> | null },
      input: { payload: Array<{ href: string; title: string }> }
    ) => {
      state.headerLinks = input.payload;
    },
  },
});

export const { updateHeaderLinks } = updateHeaderLinksSlice.actions;
export default updateHeaderLinksSlice.reducer;
