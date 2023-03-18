import { isAsyncIterable, isIterable } from "./iter";

async function async<A>(iterable: AsyncIterable<A>): Promise<A[]> {
  const res: A[] = [];

  for await (const i of iterable) {
    res.push(i);
  }

  return res;
}

export const toArray = <A>(iter: AsyncIterable<A> | Iterable<A>) => {
  if (isAsyncIterable(iter)) return async(iter);
  if (isIterable(iter)) return Array.from(iter);
  return [] as A[];
};
