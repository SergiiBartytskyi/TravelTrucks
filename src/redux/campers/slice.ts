import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperDetails } from "./operations";
import { CampersState } from "../types";

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
    resetItems: (state) => {
      state.items = [];
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    resetPagination(state) {
      state.page = 1;
      state.totalPages = 1;
    },
    resetCamper(state) {
      state.camper = null;
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
        // state.items = [...state.items, ...action.payload.items];
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

export const { resetItems, setPage, resetPagination, resetCamper } =
  slice.actions;

export default slice.reducer;
