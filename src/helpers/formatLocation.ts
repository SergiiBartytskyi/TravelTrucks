export const formatLocation = (location: string): string => {
  if (!location) return "";

  const [country, city] = location.split(", ");
  return city && country ? `${city}, ${country}` : location;
};
