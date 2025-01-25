import { createSlice } from "@reduxjs/toolkit";
import { FiltersState } from "../types";

const initialState: FiltersState = {
  url: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilters(state, action) {
      state.url = action.payload;
    },
  },
});

export const { addFilters } = slice.actions;

export default slice.reducer;
