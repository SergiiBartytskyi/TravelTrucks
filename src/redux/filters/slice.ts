import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../types";

const initialState: FiltersState = {
  url: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
    resetFilter(state) {
      state.url = "";
    },
  },
});

export const { setUrl, resetFilter } = slice.actions;

export default slice.reducer;
