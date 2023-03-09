import type { Iter } from "../../@type/@iter";

export function isIterable<T = unknown>(
  _: Iter<T> | unknown
): _ is Iterable<T> {
  return typeof (_ as any)?.[Symbol.iterator] === "function";
}

export function isAsyncIterable<T = unknown>(
  _: Iter<T> | unknown
): _ is AsyncIterable<T> {
  return typeof (_ as any)?.[Symbol.asyncIterator] === "function";
}

export function isIterator<T = unknown>(
  _: Iter<T>
): _ is Iterator<T> | AsyncIterator<T> {
  return typeof (_ as any)?.next === "function";
}

export function toIterator<T>(_: Iterable<T> | AsyncIterable<T>) {
  if (isIterable(_)) return _[Symbol.iterator]();

  if (isAsyncIterable(_)) return _[Symbol.asyncIterator]();

  throw new TypeError(
    "toIterator: iterable must be type of Iterable or AsyncIterable"
  );
}
