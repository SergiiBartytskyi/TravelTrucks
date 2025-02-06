import { RootState } from "../store";

export const selectCampers = (state: RootState) => state.campers.items;
export const selectCamper = (state: RootState) => state.campers.camper;
export const selectLoading = (state: RootState) => state.campers.isLoading;
export const selectError = (state: RootState) => state.campers.error;
export const selectPage = (state: RootState) => state.campers.page;
export const selectTotalPages = (state: RootState) => state.campers.totalPages;
