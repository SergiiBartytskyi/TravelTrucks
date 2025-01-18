export const formatCamperData = (camper) => {
  const { form, length, width, height, tank, consumption, ...rest } = camper;

  return {
    ...rest,
    form: form.charAt(0).toUpperCase() + form.slice(1),
    length: length.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    width: width.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    height: height.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    tank: tank.replace(/(\d+)([a-zA-Z]+)/, "$1 $2"),
    consumption,
  };
};
