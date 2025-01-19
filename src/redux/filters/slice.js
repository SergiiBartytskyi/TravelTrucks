import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilters(state, action) {
      state.url = action.payload;
    },
    resetFilters(state) {
      state.url = initialState.url;
    },
  },
});

export const { addFilters, resetFilters } = slice.actions;

export default slice.reducer;
