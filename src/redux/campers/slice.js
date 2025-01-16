import { createSlice, isAnyOf } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {},
});

export default slice.reducer;
