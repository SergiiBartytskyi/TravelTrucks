export const formatCategory = (category: string): string => {
  if (["petrol", "hybrid", "diesel"].includes(category)) {
    return "engine";
  }
  if (["automatic", "manual"].includes(category)) {
    return "transmission";
  }
  return category;
};
