import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCampers, getCamperDetails } from "./operations";
import { CampersState, GetCampersResponse } from "../types";

const initialState: CampersState = {
  items: [],
  camper: null,
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 1,
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    resetCampers(state) {
      state.items = [];
      state.camper = null;
      state.error = null;
      state.page = 1;
      state.totalPages = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items =
          state.page === 1
            ? action.payload.items
            : [...state.items, ...action.payload.items];
        state.totalPages = Math.ceil(action.payload.total / 5);
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCamperDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camper = action.payload;
      })
      .addCase(getCamperDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetCampers } = slice.actions;

export default slice.reducer;
