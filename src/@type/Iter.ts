export type Iter<T = unknown> =
  | Iterator<T>
  | AsyncIterator<T>
  | Iterable<T>
  | AsyncIterable<T>;

export type IterableInfer<
  T extends Iterable<unknown> | AsyncIterable<unknown>
> = T extends Iterable<infer U> | AsyncIterable<infer U> ? U : never;
