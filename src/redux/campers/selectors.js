export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.camper;
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectPage = (state) => state.campers.page;
export const selectTotalPages = (state) => state.campers.totalPages;
