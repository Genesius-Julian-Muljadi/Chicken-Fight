import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cookie: null,
};

const updateCookieSlice = createSlice({
  name: "UCSlice",
  initialState,
  reducers: {
    updateCookie: (
      state: { cookie: string | null },
      input: { payload: string }
    ) => {
      state.cookie = input.payload;
    },
  },
});

export const { updateCookie } = updateCookieSlice.actions;
export default updateCookieSlice.reducer;
