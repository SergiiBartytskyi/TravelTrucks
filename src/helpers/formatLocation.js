export const formatLocation = (location) => {
  if (!location) return "";

  const [country, city] = location.split(", ");
  return city && country ? `${city}, ${country}` : location;
};
