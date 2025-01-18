import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    location: "",
    equipments: [],
    form: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilters(state, action) {
      // state.filters = { ...state.filters, ...action.payload };
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { addFilters, resetFilters } = slice.actions;

export default slice.reducer;
