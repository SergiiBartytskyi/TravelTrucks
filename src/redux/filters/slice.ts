import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../types";

const initialState: FiltersState = {
  url: "",
  // url: "page=1&limit=5",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
      // state.url = state.url + action.payload;
    },
    resetFilter(state) {
      state.url = "";
      // state.url = "page=1&limit=5";
    },
  },
});

export const { setUrl, resetFilter } = slice.actions;

export default slice.reducer;
