import { isPromise } from "../promise";

export function* range(
  start: number,
  end?: number,
  step = 1
): IterableIterator<number> {
  if (!end) return yield* range(0, start);
  while (start < end) {
    yield start;
    start += step;
  }
}
export const toAsync = <T>(
  iter: Iterable<T | Promise<T>>
): AsyncIterableIterator<T> => {
  const iterator = iter[Symbol.iterator]();
  return {
    async next() {
      const { value, done } = iterator.next();
      if (isPromise(value)) return value.then((value) => ({ done, value }));
      else return { done, value };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
};
