import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "../types";

const initialState: FavoritesState = {
  items: [],
};

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<string>) {
      state.items = [...state.items, ...action.payload];
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((id) => id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = slice.actions;

export default slice.reducer;
