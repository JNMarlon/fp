import { isPromise } from "./promise";
import { pipe1 } from "./pipe1";

const sync = <A, B>(f: (a: B, b: A) => B, acc: B, iterable: Iterable<A>): B => {
  for (const a of iterable) {
    acc = f(acc, a);
  }

  return acc;
};

const async = async <A, B>(
  f: (a: B, b: A) => B,
  acc: Promise<B>,
  iterable: AsyncIterable<A>
) => {
  for await (const a of iterable) {
    acc = await pipe1(acc, (acc) => f(acc as B, a));
  }

  return acc;
};
