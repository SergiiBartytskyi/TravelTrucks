export const formatCamperData = (camper) => {
  const { form, length, width, height, tank, consumption, ...rest } = camper;

  return {
    ...rest,
    form: form
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .replace(/^\w/, (char) => char.toUpperCase()),
    length: length.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    width: width.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    height: height.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    tank: tank.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    consumption,
  };
};
