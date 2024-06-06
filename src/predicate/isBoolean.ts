export const isBoolean = (a: unknown): a is boolean => {
  return typeof a === "boolean";
};
