import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const initialState = {
  items: [],
  location: "",
  vehicleEquipment: [],
  vehicleType: "",
  favourites: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
