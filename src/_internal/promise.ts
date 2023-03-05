export const isPromise = <T>(_: Promise<T> | T): _ is Promise<T> => {
  if (_ instanceof Promise) return true;

  if (
    _ !== null &&
    typeof _ === "object" &&
    typeof (_ as any)?.then === "function" &&
    typeof (_ as any)?.catch === "function"
  )
    return true;

  return false;
};
