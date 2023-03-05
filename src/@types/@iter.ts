export type Iter<T = unknown> =
  | Iterator<T>
  | AsyncIterator<T>
  | Iterable<T>
  | AsyncIterable<T>;
