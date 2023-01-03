export const replaceSeparator = (str: string, direct: boolean) => {
  if (direct) {
    return str.replace(",", ".");
  }
  return str.replace(".", ",");
};
