import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../types";

const initialState: FiltersState = {
  url: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilters(state, action: PayloadAction<string>) {
      console.log("action.payload :>> ", action.payload);
      state.url = action.payload;
    },
    resetFilter(state) {
      state.url = "";
    },
  },
});

export const { addFilters, resetFilter } = slice.actions;

export default slice.reducer;
