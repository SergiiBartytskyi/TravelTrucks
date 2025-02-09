import { Camper } from "../redux/types";

type FormatCamper = {
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
};

export const formatCamperData = (camper: Camper): FormatCamper => {
  const { form, length, width, height, tank, consumption } = camper;

  return {
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
