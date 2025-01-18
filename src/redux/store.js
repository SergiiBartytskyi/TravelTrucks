import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import campersReducer from "./campers/slice";
import filtersReducer from "./filters/slice";
import favoritesReducer from "./favorites/slice";

// const persistedFavoritesCampers = persistReducer(
//   {
//     key: "favorites",
//     storage,
//   },
//   favoritesReducer
// );

// export const store = configureStore({
//   reducer: {
//     campers: campersReducer,
//     filters: filtersReducer,
//     // favorites: persistedFavoritesCampers,
//     favorites: favoritesReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    // favorites: persistedFavoritesCampers,
    favorites: favoritesReducer,
  },
});
// export const persistor = persistStore(store);
export default store;
