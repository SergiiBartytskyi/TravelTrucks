import { createSlice } from "@reduxjs/toolkit";
import { FavoritesState } from "../types";

const initialState: FavoritesState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
};

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.items.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = slice.actions;

export default slice.reducer;
