import type { Iter } from "./@type/@iter";

export function isIterable<T = unknown>(
  i: Iter<T> | unknown
): i is Iterable<T> {
  return typeof (i as any)?.[Symbol.iterator] === "function";
}

export function isAsyncIterable<T = unknown>(
  i: Iter<T> | unknown
): i is AsyncIterable<T> {
  return typeof (i as any)?.[Symbol.asyncIterator] === "function";
}

export function isIterator<T = unknown>(
  i: Iter<T>
): i is Iterator<T> | AsyncIterator<T> {
  return typeof (i as any)?.next === "function";
}

export function toIterator<T>(i: Iterable<T> | AsyncIterable<T>) {
  if (isIterable(i)) return i[Symbol.iterator]();

  if (isAsyncIterable(i)) return i[Symbol.asyncIterator]();

  throw new TypeError(
    "toIterator: iterable must be type of Iterable or AsyncIterable"
  );
}
